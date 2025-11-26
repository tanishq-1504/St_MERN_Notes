let nextId = 1;

function Task(taskText, isTaskDone) {
  this.taskId = nextId++;
  this.taskText = taskText;
  this.isTaskDone = isTaskDone;
  this.timeStamp = Date.now();
}

function TodoStore() {
  this.todoStore = [];
}

TodoStore.prototype.saveTodo = function (taskText, isTaskDone) {
  const newTask = new Task(taskText, isTaskDone);
  this.todoStore.push(newTask);
  return newTask;
};

TodoStore.prototype.getAllTodos = function () {
  return this.todoStore;
};

TodoStore.prototype.toggleTask = function (taskIdToUpdate) {
  const taskWithId = this.todoStore.find(
    (task) => task.taskId === taskIdToUpdate
  );

  if (!taskWithId) {
    return null;
  }

  taskWithId.isTaskDone = !taskWithId.isTaskDone;
  return taskWithId;
};

TodoStore.prototype.deleteTodo = function (taskIdToDelete) {
  const index = this.todoStore.findIndex(
    (task) => task.taskId === taskIdToDelete
  );

  if (index === -1) {
    return false;
  }

  this.todoStore.splice(index, 1);
  return true;
};

module.exports = {
  TodoStore,
  Task,
};
