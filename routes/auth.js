module.exports = (db) => {
    var express = require('express');
    var router = express.Router();


    router.get('/register', function (req, res, next) {
        res.render('register', { title: 'Register', data: db.get("lessons[0]").value() });
    });
    router.get('/', function (req, res, next) {
        res.render('login', { title: 'Login' });
    });
    return router;
};
