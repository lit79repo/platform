let path = require("path");
let config = require(path.join(__dirname, "../config/backend.js"));
let fs = require("fs");
let apiRouter = require("./backend.modules.express/api");
let diagRouter = require("./backend.modules.express/diag");
let express = require("express");
let logger = require("morgan");
let app = express();


app.use(logger('common', {stream: fs.createWriteStream('./access.log', {flags: 'a'})}));
app.use(logger('dev'));
//PING / PONG Router
app.use("/diag", diagRouter);
//api Router...
app.use("/api", apiRouter);
//Static frontend...
app.use("/", express.static(path.join(__dirname, "..", "dist")));

//Listen to port in config. (../config/backend.js)
app.listen(config.port, () => {
	console.log("Listening on", config.port);
});