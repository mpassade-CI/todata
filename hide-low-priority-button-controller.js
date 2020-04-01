const changeHideLowBtn = function(){
    const btnText = document.querySelector('.hide-low-priority')
    if (btnText.innerText==='Hide Low Priority'){
        btnText.innerText='Show Low Priority'
    }
    else {
        btnText.innerText='Hide Low Priority'
    }
}
const hideLow = function(){
    const comLastBtn = document.querySelector('.complete-last')
    const high1stBtn = document.querySelector('.high-priority-first')
    changeHideLowBtn()
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
document.querySelector('.hide-low-priority').addEventListener('click', hideLow)