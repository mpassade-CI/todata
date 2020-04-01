const removeInput = function(){
    document.querySelector('.todo-input').value = ''
}
const clickAdd = function(){
    const comLastBtn = document.querySelector('.complete-last')
    const high1stBtn = document.querySelector('.high-priority-first')
    clearTodos()
    addTodo()
    removeInput()
    if (high1stBtn.innerText==='High Priority First' &&
        comLastBtn.innerText==='Complete Last'){
            printTodos(todos)
    }
    else if (high1stBtn.innerText==='Original Order' &&
            comLastBtn.innerText==='Complete Last'){
                printTodos(priority2First(todos))
    }
    else if (high1stBtn.innerText==='High Priority First' &&
            comLastBtn.innerText==='Original Order'){
                printTodos(notCompleteFirst(todos))
    }
    else if (high1stBtn.innerText==='Original Order' &&
            comLastBtn.innerText==='Original Order'){
                printTodos(pri2FirstCompLast(todos))
    }
}
document.querySelector('.add-todo').addEventListener('click', clickAdd)