const changeComLastBtn = function(){
    const btnText = document.querySelector('.complete-last')
    if (btnText.innerText==='Complete Last'){
        btnText.innerText='Original Order'
    }
    else {
        btnText.innerText='Complete Last'
    }
}
const completeLast = function(){
    const high1stBtn = document.querySelector('.high-priority-first')
    const comLastBtn = document.querySelector('.complete-last')
    changeComLastBtn()
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
document.querySelector('.complete-last').addEventListener('click', completeLast)