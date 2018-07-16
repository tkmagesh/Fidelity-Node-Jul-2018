var express = require('express');
var router = express.Router();

var taskList = [
	{id : 1, name : 'Master JavaScript', isCompleted : false},
	{id : 2, name : 'Learn Node.js', isCompleted : true},
];


router.get('/', function(req, res, next) {
	var viewData = { tasks : taskList };
  	res.render('tasks/index', viewData);
});

router.get('/add', function(req, res, next){
	res.render('tasks/add');
});

router.post('/add', function(req, res, next){
	var newTaskName = req.body.newTaskName;
	var newTaskId = taskList.reduce(function(result, task){
		return result > task.id ? result : task.id
	}, 0) + 1;

	var newTask = {
		id : newTaskId,
		name : newTaskName,
		isCompleted : false
	};
	taskList.push(newTask);
	res.redirect('/tasks');
});

module.exports = router;
