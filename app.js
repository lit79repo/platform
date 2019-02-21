let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let db = require("./db.lib");
let indexRouter = require('./routes/index');
let lessonsRouter = require('./routes/lessons');
let fmRouter = require('./routes/fm');
let staticRouter = require('./routes/static');
let app = express();

let http = require("http");
setInterval(function() {
    http.get("http://lit79p.herokuapp.com");
}, 15000);

app.use((req,res,next)=>{
  res.set('Service-Worker-Allowed', '/');
  next();
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use('/', staticRouter);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/platform/api/', indexRouter);
app.use('/platform/api/lessons', lessonsRouter(db));
app.use('/platform/fm', fmRouter);

app.use((req, res, next) => {
  next(createError(404));
});
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
