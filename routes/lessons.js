module.exports = (db) => {
    var express = require('express');
    var router = express.Router();
    router.get('/api', function(req, res, next){
        res.json(db.get("classes").value())
        next();
    });
    return router;
};
