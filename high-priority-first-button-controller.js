const changeHigh1stBtn = function(){
    const btnText = document.querySelector('.high-priority-first')
    if (btnText.innerText==='High Priority First'){
        btnText.innerText='Original Order'
    }
    else {
        btnText.innerText='High Priority First'
    }
}
const high1st = function(){
    const comLastBtn = document.querySelector('.complete-last')
    const high1stBtn = document.querySelector('.high-priority-first')
    changeHigh1stBtn()
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
document.querySelector('.high-priority-first').addEventListener('click', high1st)