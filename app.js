
var express = require("express");

var bodyParser = require('body-parser');
var path = require('path');
var app = express();

// my static route
app.use('/static', express.static(path.join(__dirname, 'public')));
//bootstrap route
app.use('/vendor', express.static( path.join(__dirname, 'node_modules')));

app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser());

// parse application/json
app.use(bodyParser.json())

//establish router
app.use('/', require('./routes')); // brings in route/index...
/*
 do I need to set a render engine? If so Maybe I can use:

app.engine('html', require('ejs').renderFile); with ejs.

but idk if this is necessary in this case.
*/

module.exports = app;