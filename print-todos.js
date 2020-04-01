const printTodos = function(todos) {
  const hideComBtn = document.querySelector('.hide-complete')
  const hideLowBtn = document.querySelector('.hide-low-priority')
    if (hideComBtn.innerText==='Hide Complete' &&
        hideLowBtn.innerText==='Hide Low Priority'){
      for (const todo of todos){
        printTodo(todo)
      }
    }
    else if (hideComBtn.innerText==='Show Complete' &&
            hideLowBtn.innerText==='Hide Low Priority'){
              for (const todo of todos){
                if (!todo.complete){
                  printTodo(todo)
                }
               }
    }
    else if (hideComBtn.innerText==='Hide Complete' &&
            hideLowBtn.innerText==='Show Low Priority'){
              for (const todo of todos){
                if (todo.priority===2){
                  printTodo(todo)
                }
               }
    }
    else if (hideComBtn.innerText==='Show Complete' &&
            hideLowBtn.innerText==='Show Low Priority'){
              for (const todo of todos){
                if (!todo.complete && todo.priority===2){
                  printTodo(todo)
                }
               }
    }
}

printTodos(todos);