let express = require("express");
let router = express.Router();
let fs = require("fs");
let path = require("path");

router.get("/", (req, res) => {
	fs.readFile(path.join(__dirname, "../..", "daily.json"), "utf8", function(err, data) {
		if (err) throw err;
		res.json(JSON.parse(data));
	});
});
module.exports = { router: router, path: "/daily" };
