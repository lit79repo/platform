let cluster = require('cluster');
console.log("// made by 0x77")
//Run backend compile!
let childProcess = require('child_process');
let runScript = (scriptPath, callback) => {

    // keep track of whether callback has been invoked to prevent multiple invocations
    var invoked = false;

    var process = childProcess.fork(scriptPath);

    // listen for errors as they may prevent the exit event from firing
    process.on('error', function (err) {
        if (invoked) return;
        invoked = true;
        callback(err);
    });

    // execute the callback once the process has finished running
    process.on('exit', function (code) {
        if (invoked) return;
        invoked = true;
        var err = code === 0 ? null : new Error('exit code ' + code);
        callback(err);
    });

}
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
    let path = require("path");

    let app = express();
    let port = process.env.PORT || 3000;

    app.use("/", express.static(path.join(__dirname, "..", "frontend", "dist")));
    app.use("/db", dbRoute);
    app.get("/debug", (req, res) => {
        res.json({ cluster: { worker_id: cluster.worker.id } })
    });
    app.listen(port, () => { console.log(port); console.log('Worker %d running!', cluster.worker.id); });
}
