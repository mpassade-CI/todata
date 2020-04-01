const changePriBtn = function(){
    const btnText = document.querySelector('.toggle-priorities')
    if (btnText.innerText==='Hide Priorities'){
        btnText.innerText='Show Priorities'
    }
    else {
        btnText.innerText='Hide Priorities'
    }
}
const showPri = function(){
    const comLastBtn = document.querySelector('.complete-last')
    const high1stBtn = document.querySelector('.high-priority-first')
    changePriBtn()
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
document.querySelector('.toggle-priorities').addEventListener('click', showPri)