var express = require('express');
var router = express.Router();
var taskService = require('../services/taskService');



router.get('/', function(req, res, next) {
	var taskList = taskService.getAll();
	var viewData = { tasks : taskList };
  	res.render('tasks/index', viewData);
});

router.get('/add', function(req, res, next){
	res.render('tasks/add');
});

router.post('/add', function(req, res, next){
	var newTaskName = req.body.newTaskName;
	taskService.createNew(newTaskName);
	res.redirect('/tasks');
});

module.exports = router;
