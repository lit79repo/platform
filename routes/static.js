var express = require('express');
var path = require('path');
var router = express.Router();
var fileManager = require('express-file-manager');
const fs = require("fs");

console.log(path.join(__dirname, '..', 'frontend', 'dist'));
router.use('/', express.static(path.join(__dirname, '..', 'frontend', 'dist')));

module.exports = router;
