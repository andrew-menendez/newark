"use strict";

//pulled in from app.js on line 20...
var express = require('express');
var router = express.Router();

//pulls in models and db connection
var models = require('../models/');
var Task=models.Task

router.get('/', function(req, res, next) {
  console.log(req.body);
  res.sendfile('./views/index.html');
});


router.get('/tasks', function(req, res, next) {
  console.log(req.body);
  Task.find({}).exec()
  .then(function success (tasks) {
    res.send(tasks);
  })
  .catch(console.error);
});


router.post('/add', function(req, res, next) {
  console.log(req.body);
  console.log(Task)

  var newTask = new Task({
    taskname: req.body.name,
    pNumber: req.body.weight

  });

  newTask.save()
  .then(function success (task) {
    console.log(task)
    res.send(task);
  })
  .catch(console.error);

});

module.exports = router;
