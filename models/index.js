'use strict';
var Promise = require('bluebird');
var path = require('path');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/newark');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

//my one model db...

var taskSchema = new mongoose.Schema({
  taskname: String,
  pNumber: Number
});


var Task = mongoose.model('Task', taskSchema);


module.exports = {
  Task: Task
};

// probably should just export Task in this case