module.exports = (db) => {
    var express = require('express');
    var router = express.Router();


    router.get('/teacher', function (req, res, next) {
        res.render('teacher', { title: 'Вчитель' });
    });
    return router;
};
