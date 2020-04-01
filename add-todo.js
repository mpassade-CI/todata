const addTodo = function() {
  const newTodo = {}
  newTodo.text = document.querySelector('.todo-input').value
  newTodo.id = todos.length
  newTodo.complete = false
  newTodo.priority = document.querySelector('.priority').options.selectedIndex+1
  todos.push(newTodo);
}