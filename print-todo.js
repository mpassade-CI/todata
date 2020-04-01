const printTodo = function(todo) {
  const high1stBtn = document.querySelector('.high-priority-first')
  const comLastBtn = document.querySelector('.complete-last')
  const hideComBtn = document.querySelector('.hide-complete')
  const shPriBtn = document.querySelector('.toggle-priorities')
  const li = document.createElement('li');
  if (shPriBtn.innerText==='Show Priorities'){
    li.innerText = todo.text;
  }
  else {
    li.innerText = getNameAndPri(todo);
  }
  const ul = document.querySelector('.todo-list');
  ul.appendChild(li);
  if (todo.complete) {
    li.classList.add('complete')
  }
  li.classList.add('todo-item');
  li.id = todo.id;
  li.style.display = ''
  li.addEventListener('click', function(event) {
    event.target.classList.toggle('complete')
    todo.complete ? todo.complete=false : todo.complete=true
    if (hideComBtn.innerText==='Show Complete' && todo.complete===true){
      event.target.style.display = 'none'
    }
    if (high1stBtn.innerText==='High Priority First' &&
        comLastBtn.innerText==='Original Order'){
          clearTodos()
          printTodos(notCompleteFirst(todos))
    }
    else if (high1stBtn.innerText==='Original Order' &&
            comLastBtn.innerText==='Original Order'){
              clearTodos()
              printTodos(pri2FirstCompLast(todos))
    }

  })
}