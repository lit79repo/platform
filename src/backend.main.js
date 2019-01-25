let path = require("path");
let config = require(path.join(__dirname, "../config/backend.js"));
let backend = require(path.join(__dirname, "backend.modules/index.js"));
let fs = require("fs");
let express = require("express");
let logger = require("morgan");
let app = express();

app.use(logger('common', {stream: fs.createWriteStream('./access.log', {flags: 'a'})}));
app.use(logger('dev'));

backend.forEach((Module)=>{
	Module = require(path.join(__dirname, "backend.modules", Module));
	console.log("info:", "Adding express module:", Module.path);
	app.use(Module.path, Module.router);
});

app.listen(config.port, () => {
	console.log("Listening on", config.port);
});