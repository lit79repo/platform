module.exports = (db) => {
    var express = require('express');
    var router = express.Router();
    router.get('/', function (req, res, next) {
        res.render('lessons', { title: 'Розклад', classes: db.get("classes").value() });
    });
    router.get('/api', function(req, res, next){
        res.json(db.get("classes").value())
        next();
    });
    return router;
};
