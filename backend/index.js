let express = require("express");
let dbRoute = require("./db.route");
let path = require("path");
let app = express();
let port = process.env.PORT || 3000;

app.use("/db", dbRoute);
app.use("/", express.static(path.join(__dirname, "..", "public")));

app.listen(port, console.log);