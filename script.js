
let taskInp = document.getElementById('task-inp')
const addTask = document.getElementById('add-task')
const taskList = document.getElementById('task-list')



// disabling the button initially 
addTask.disabled = true


// validating the input
taskInp.addEventListener('input',function(){
    const value = this.value.trim()
    console.log(value)
    if (value){
        addTask.disabled = false;
    }
    else{
        addTask.disabled = true;
    }
})

// adding elements
addTask.addEventListener('click',function(){
    const value = taskInp.value.trim()

    let task = document.createElement('div')
    task.classList.add('task')
    console.log(task)
    
    let li = document.createElement('li')
    li.classList.add('task-info')
    li.textContent = `${value}`
    task.appendChild(li)
    
    let deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = `<i class='fa-solid fa-trash-can'></i>`
    deleteBtn.classList.add('delete-btn')
    task.appendChild(deleteBtn)

    let checkBtn = document.createElement('button')
    checkBtn.innerHTML = `<i class='fa-solid fa-check'></i>`
    checkBtn.classList.add('check-btn')
    task.appendChild(checkBtn)
    
    taskList.append(task)

    
    taskInp.value = ""
    addTask.disabled = true;
})

// deleting a task
taskList.addEventListener('click',function(e){

    let button = e.target.parentElement

    if(button.classList[0] === 'delete-btn'){
    button.parentElement.remove()
    }
})

// clicking on check button
taskList.addEventListener('click',function(e){
    let checkBtn = e.target.parentElement

    if(checkBtn.classList[0] === 'check-btn'){
        const li = checkBtn.previousSibling.previousSibling
        li.style.textDecoration = 'line-through'
        li.style.textDecorationColor = 'rgba(252, 122, 0, 1)'
        li.style.textDecorationThickness = '3px'

    }

    


})