let db = require("./db.lib");
let mainDB = new db("db", "lit79", "0");
let devDB = new db("db", "lit79", "1");
let express = require("express");
let bodyParser = require("body-parser");
let router = express.Router();
router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());
router.route("/")
    .get(function (req, res, next) {
        if(req.query.segment !== undefined){
        res.json(mainDB.read(req.query.segment));
        next();
    }else{
        res.status(404).send("You are not provided segment!");
        next();
    }
    })
    .post(function (req, res, next) {
        mainDB.write(req.body.segment, req.body.data);
        res.json({});
        next();
    });


router.route("/dev")
    .get(function (req, res, next) {
        if(req.query.segment !== undefined){
        res.json(devDB.read(req.query.segment));
        next();
    }else{
        res.status(404).send("You are not provided segment!");
        next();
    }
    })
    .post(function (req, res, next) {
        devDB.write(req.body.segment, req.body.data);
        res.json({});
        next();
    });
module.exports = router;