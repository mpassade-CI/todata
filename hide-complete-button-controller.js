const changeCompleteBtn = function(){
    const btnText = document.querySelector('.hide-complete')
    if (btnText.innerText==='Hide Complete'){
        btnText.innerText='Show Complete'
    }
    else {
        btnText.innerText='Hide Complete'
    }
}
const hideComplete = function(){
    const comLastBtn = document.querySelector('.complete-last')
    const high1stBtn = document.querySelector('.high-priority-first')
    changeCompleteBtn()
    clearTodos()
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
document.querySelector('.hide-complete').addEventListener('click', hideComplete)