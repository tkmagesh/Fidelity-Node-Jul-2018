var taskList = [
	{id : 1, name : 'Master JavaScript', isCompleted : false},
	{id : 2, name : 'Learn Node.js', isCompleted : true},
];

function getAll(){
	return taskList;
}

function createNew(newTaskName){
	var newTaskId = taskList.reduce(function(result, task){
		return result > task.id ? result : task.id
	}, 0) + 1;

	var newTask = {
		id : newTaskId,
		name : newTaskName,
		isCompleted : false
	};
	taskList.push(newTask);
	return newTask;
}

function remove(id){
	taskList = taskList.filter(function(task){
		return task.id !== id;
	});
}

var taskService = {
	getAll : getAll,
	createNew : createNew,
	remove : remove
};

module.exports = taskService;