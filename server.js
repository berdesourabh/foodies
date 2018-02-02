var express = require('express');
var path = require('path');
var logger = require('morgen');
var routes = require('./routes/index');

var app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(logger('dev'));

app.use('/',routes);
