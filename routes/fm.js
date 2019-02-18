var express = require('express');
var router = express.Router();
var fileManager = require('express-file-manager');
const fs = require("fs");


router.get('/', function (req, res, next) {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login] = new Buffer(b64auth, 'base64').toString().split(':');
    if (!login) {
        res.set('WWW-Authenticate', 'Basic realm="401"');
        res.status(401).send('Authentication required.');
    }
    if (!fs.existsSync(login + ".fs")) {
        fs.mkdirSync(login + ".fs");
    }
    router.use(fileManager(login + ".fs"));
    next();
});

module.exports = router;
