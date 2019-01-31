let path = require("path");
let config = require(path.join(__dirname, "../config/backend.js"));
let fs = require("fs");
let graphqlRouter = require("./backend.modules.express/graphql");
let diagRouter = require("./backend.modules.express/diag");
let express = require("express");
let logger = require("morgan");
let app = express();


app.use(logger('common', {stream: fs.createWriteStream('./access.log', {flags: 'a'})}));
app.use(logger('dev'));

app.use("/diag", diagRouter);
app.use("/", graphqlRouter);

app.listen(config.port, () => {
	console.log("Listening on", config.port);
});