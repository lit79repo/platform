const express = require("express");
const statusMonitor = require('express-status-monitor')();
const dbRoute = require("./core/db.route");
let app = express();
let port = process.env.PORT || 3000;
app.use(statusMonitor);
app.use('/db', dbRoute);
app.get('/status', statusMonitor.pageRoute);

app.listen(port);