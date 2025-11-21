const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

let todos = [];

const savedTodos = localStorage.getItem("todos");
console.log(typeof savedTodos); // string
console.log(savedTodos)

if(savedTodos){
    todos = JSON.parse(savedTodos);
    renderTodos()
}

todoForm.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Button is clicked!")
    const newTodoText = todoInput.value.trim();
    if(newTodoText === ""){
        alert("Please enter a task!")
        return;
    }

    todos.push(newTodoText);

    localStorage.setItem("todos", JSON.stringify(todos))

    todoInput.value = "";
})

function renderTodos(){
    todoList.inneHTML = "";

    for(let index = 0; index < todos.length; index++){
        const newListItem = document.createElement("li");
        newListItem.textContent = todos[index];
        todoList.appendChild(newListItem);
    }
}