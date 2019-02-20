var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Ліцей №79' });
  res.send("");
});

module.exports = router;
