let express = require("express");
let dbRoute = require("./db.route");
let path = require("path");
let childProcess = require('child_process');
let app = express();
let port = process.env.PORT || 3000;
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
app.use("/", express.static(path.join(__dirname, "..", "frontend", "dist")));
app.use("/db", dbRoute);

app.listen(port, console.log);