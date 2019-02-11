#!/usr/bin/env node

'use strict';
let parser = new require('argparse').ArgumentParser();
let express = require("express");
let dbRoute = require("./db.route");
let app = express();
let port = process.env.PORT || 3000;
let runScript = require("./runscript.lib");
let path = require("path");
parser.addArgument(['-c', '--cluster']);
parser.addArgument(['-x', '--dontBuildFrontend']);
let args = parser.parseArgs();
if (args.cluster) {
    let cluster = require('cluster');

    if (cluster.isMaster) {
        var cpuCount = require('os').cpus().length;
        for (var i = 0; i < cpuCount; i += 1) {
            cluster.fork();
        }

    } else {
        app.use("/", express.static(path.join(__dirname, "..", "frontend", "dist")));
        app.use("/db", dbRoute);
        app.get("/debug", (req, res) => {
            res.json({
                cluster: {
                    worker_id: cluster.worker.id
                }
            })
        });
        app.listen(port, () => {
            console.log(port);
            console.log('Worker %d running!', cluster.worker.id);
        });
    }

} else {
    app.use("/", express.static(path.join(__dirname, "..", "frontend", "dist")));
    app.use("/db", dbRoute);
    app.get("/debug", (req, res) => {
        res.json({});
    });
    app.listen(port, () => {
        console.log(port);
    });
}
if (!args.dontBuildFrontend) {
    runScript(path.join(__dirname, "..", "frontend", "build", "build.js"), (err) => {
        if (err) {
            console.log("error building backend.");
        }
    });
}
