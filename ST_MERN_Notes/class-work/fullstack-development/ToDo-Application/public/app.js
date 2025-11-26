const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
let isTodoListEmpty = true; 

const BASE_URL = "http://localhost:3000"

document.addEventListener("DOMContentLoaded", loadTodos)

async function loadTodos() {
    const response = await fetch(`${BASE_URL}/api/v1/todos`); 
    if (!response.ok) {
        alert("The URL is not valid!")
    }

    
    const data = await response.json(); 
    console.log(data.allTodos);
    renderTodos(data.allTodos)
}

todoForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    console.log("Form is submitted!")

    const newTaskText = todoInput.value.trim(); 

    if (newTaskText === "") {
        alert("Please enter a task!")
        return;
    }

    const requestOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            taskText: newTaskText,
            isTaskDone: false
        })
    }

    const response = await fetch(`${BASE_URL}/api/v1/todos`, requestOptions)
    if (!response.ok) {
        alert("Add Todo Fetch URL is invalid!")
    }

    
    const data = await response.json()
    console.log(data)

    const newListItem = createListItem(data.newTask);
    
    if (isTodoListEmpty) {
        todoList.innerHTML = "";
        isTodoListEmpty = false;
    }
    
    todoList.prepend(newListItem); 
    todoInput.value = "";
})


async function deleteTask(taskId){
    const response = await fetch(`${BASE_URL}/api/v1/todos/${taskId}`, {
        method: "DELETE"
    })
    const data = await response.json();
}



function createListItem(taskObject) {
    const newListItem = document.createElement("li"); 
    newListItem.setAttribute("id", "taskContainer")

    const isTaskDoneCheckBox = document.createElement('input');
    isTaskDoneCheckBox.setAttribute("type", "checkbox")

    

    const p = document.createElement('p');
    p.setAttribute("id", "taskContent")

    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskObject.taskText;

    const timeStampSpan = document.createElement('span');
    timeStampSpan.textContent = taskObject.timeStamp;
    console.log(taskObject.timeStamp)

    p.appendChild(taskTextSpan)
    p.appendChild(timeStampSpan)

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute("id", "taskDeleteBtn")
    deleteBtn.textContent = "X"

    deleteBtn.addEventListener("click", () => deleteTask(taskObject.taskId))

    newListItem.appendChild(isTaskDoneCheckBox);
    newListItem.appendChild(p);
    newListItem.appendChild(deleteBtn);

    return newListItem;  
}

function renderTodos(todos) {
    todoList.innerHTML = "";


    if (!todos.length) {
        todoList.innerHTML = "<p>No todos found. Please add some tasks.</p>"
        return;
    }

    isTodoListEmpty = false;
    todos.map((todo) => {
        const newListItem = createListItem(todo)
        todoList.prepend(newListItem) 
    })
}