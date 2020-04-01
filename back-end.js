

/********************
 * HELPER FUNCTIONS *
 ********************/

const getTodoName = function(todo) {
  return todo.text
}

const getCompleteness = function (todo) {
  return todo.complete
}

const getPriority = function (todo) {
  return todo.priority
}

const getNameAndPri = function(todo){
  const priority = todo.priority === 2 ? 'High' : 'Low';
    return `${todo.text} - ${priority}`
}

const isComplete = function(todo) {
  return todo.complete
}

const isNotComplete = function(todo) {
  return !isComplete(todo)
}

const isHighPriority = function(todo) {
  return todo.priority === 2
}

const isLowPriority = function(todo) {
  return todo.priority === 1
}

const sortByPriDesc = function(a,b){
  a = a.priority
  b = b.priority
  return b-a
}

const sortByNotComp = function(a,b){
  a = a.complete
  b = b.complete
  return a-b
}



/***********************
 * ITERATION FUNCTIONS *
 ***********************/

const names = function (todos) {
  return todos.map(getTodoName)
}

const namesAndPriorities = (todos) => todos.map((todo) => {
    const priority = todo.priority === 2 ? 'High' : 'Low';

    return `${todo.text} - ${priority}`
})

const justNotComplete = function (todos) {
  return todos.filter(isNotComplete)
}

const justComplete = function (todos) {
  return todos.filter(isComplete)
}

const priority2Only = function (todos) {
  return todos.filter(isHighPriority)
}

const priority1Only = function (todos) {
  return todos.filter(isLowPriority)
}

const priority2First = function (todos) {
  return [...todos].sort(sortByPriDesc)
}

const notCompleteFirst = function (todos) {
  return [...todos].sort(sortByNotComp)
}

const pri2FirstCompLast = function (todos) {
  const compArr = []
  const priSorted = [...todos].sort(sortByPriDesc)
  const pri2 = []
  const arr = []
  for (let i=0; i<todos.length; i++){
    if (priSorted[i].complete===true){
      compArr.push(priSorted[i])
    }
    else if (priSorted[i].priority===2){
      pri2.push(priSorted[i])
    }
    else {
      arr.push(priSorted[i])
    }
  }
  return pri2.concat(arr,compArr)
}

if (typeof notCompleteFirst === 'undefined') {
  notCompleteFirst = undefined;
}

if (typeof priority2First === 'undefined') {
  priority2First = undefined;
}

module.exports = {
  getTodoName,
  getCompleteness,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
  notCompleteFirst,
  priority2First,
}
