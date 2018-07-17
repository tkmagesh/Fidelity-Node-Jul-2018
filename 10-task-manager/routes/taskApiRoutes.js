var express = require('express');
var router = express.Router();
var taskService = require('../services/taskService');

router.get('/', function(req, res, next) {
	var taskList = taskService.getAll();
	res.json(taskList);
});

router.post('/', function(req, res, next){
	var newTaskName = req.body.newTaskName;
	var newTask = taskService.createNew(newTaskName);
	res.status(201).json(newTask);
});

router.delete('/:id', function(req, res, next){
	taskService.remove(parseInt(req.params.id));
	res.status(200).json({});
})
module.exports = router;
