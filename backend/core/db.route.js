const path = require("path");
const database = require("./db.lib");
const db = new database(path.join(__dirname, "..", "..", "db", "db.json"));
const express = require("express");
var bodyParser = require("body-parser");
const router = express.Router();
router.use(bodyParser.urlencoded({
    extended: false
}));
router.use(bodyParser.json());

router.get("/get/:query", (req, res) => {
    let response = db.db.get(req.params.query);
    res.json(response);
});

router.post("/push", (req, res) => {
    let response = db.db.get('posts')
        .push(JSON.parse(req.body.data))
        .write();
    res.json(response);
});
router.post("/find/:query", (req, res) => {
    let response = db.get(req.params.query)
        .find(JSON.parse(req.body.data))
        .value();
    res.json(response);
});
router.post("/exec", (req, res) => {
    res.json(eval(req.body.data));
});
module.exports = router;