let cluster = require('cluster');
let path = require("path");
let runScript = require("./runscript.lib");
runScript(path.join(__dirname, "..", "frontend", "build", "build.js"), (err) => {
    if (err) {
        console.log("error building backend.");
    }
});

if (cluster.isMaster) {

    var cpuCount = require('os').cpus().length;

    // Create a worker for each CPU
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }

} else {
    let express = require("express");
    let dbRoute = require("./db.route");
    let app = express();
    let port = process.env.PORT || 3000;

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
