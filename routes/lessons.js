module.exports = (db) => {
    var express = require('express');
    var router = express.Router();
    router.get('/', function (req, res, next) {
        res.render('lessons', { title: 'Розклад', classes: db.get("classes").value() });
    });
    return router;
};
