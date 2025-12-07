import { TablesDB, ID, Client } from "appwrite";

const client = new Client()
    .setProject("692d26c5001d489c6e60")
    .setEndpoint("https://sgp.cloud.appwrite.io/v1")

const tablesDB = new TablesDB(client);

const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
let isTodoListEmpty = true;

const BASE_URL = "http://localhost:3000"

document.addEventListener("DOMContentLoaded", loadTodos)

async function loadTodos(){
    const taskData = await tablesDB.listRows({
        databaseId: '692d41240012e7b19288',
        tableId: 'task'
    });
    console.log(taskData)
    renderTodos(taskData.rows)
}

todoForm.addEventListener("submit", async function (event){
    event.preventDefault();
    console.log("Form is submitted!")

    const newTaskText = todoInput.value.trim();

    if(newTaskText === ""){
        alert("Please enter a task!")
        return;
    }

    const newtaskResult = await tablesDB.createRow({
        databaseId:'692d41240012e7b19288',
        tableId: 'task',
        rowId: ID.unique(),
        data: {
            "taskText": newTaskText,
            "isTaskDone": false
        }
    });

    console.log(newtaskResult);

    const newListItem = createListItem(newtaskResult);

    if(isTodoListEmpty) {
        todoList.innerHTML = "";
        isTodoListEmpty = false;
    }

    todoList.prepend(newListItem);
    todoInput.value = "";
})

async function deleteTask($idToBeDeleted) {
    console.log(`Deleting the task with ${$idToBeDeleted}`)
    const response = await fetch(`${BASE_URL}/api/v1/todos/${$idToBeDeleted}`, {
        method: "DELETE"
    })

    if (!response.ok) {
        const errorText = await response.text(); // just to debug
        console.error("Delete failed:", response.status, errorText);
        alert("Delete failed. Check backend route / URL.");
        return; // ⬅️ stop here, don't try to parse JSON
    }

    const data = await response.json();
    console.log(data);

    if (data.success) {
        const listItemToBeRemoved = document.getElementById(idToBeDeleted);
        listItemToBeRemoved.remove();
        const listItems = document.querySelectorAll(".taskContainer");

        if (!listItems.length) {
            console.log("TodoList is Empty!");
            todoList.innerHTML = "<p>No todos.Please add some tasks.</p>"
        }
    }
}

async function toggleTask($idTobeToggled){
    const response = await fetch(`${BASE_URL}/api/v1/todos/toggle/${$idTobeToggled}`,{
        method:"PATCH"
    });
    if(!response.ok){
        alert("Pass the value fetch url to toggle patch")
    }
    const data = await response.json();
    console.log(data);
}

function createListItem(taskObject) {
    const newListItem = document.createElement("li"); // <li></li>
    newListItem.setAttribute("class", "taskContainer")
    newListItem.setAttribute("id", taskObject.$id)


    const isTaskDoneCheckBox = document.createElement('input');
    isTaskDoneCheckBox.setAttribute("type", "checkbox")

    isTaskDoneCheckBox.addEventListener("change", () => toggleTask(taskObject.$id))

    console.log(isTaskDoneCheckBox.checked)
    isTaskDoneCheckBox.checked = taskObject.isTaskDone;

    // isTaskDoneCheckBox.checked -> true/ false


    const p = document.createElement('p');
    p.setAttribute("id", "taskContent")

    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskObject.taskText;

    const $createdAtSpan = document.createElement('span');
    $createdAtSpan.textContent = taskObject.$createdAt;
    console.log(taskObject.$createdAt)

    p.appendChild(taskTextSpan)
    p.appendChild($createdAtSpan)

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute("id", "taskDeleteBtn")
    deleteBtn.textContent = "X"

    deleteBtn.addEventListener("click", () => deleteTask(taskObject.$id))

    newListItem.appendChild(isTaskDoneCheckBox);
    newListItem.appendChild(p);
    newListItem.appendChild(deleteBtn);

    return newListItem;  //<li>Go to Market</li>
}

function renderTodos(todos) {
    todoList.innerHTML = "";

    // I am rendering the UI for the Empty State / Data from the server.
    if (!todos.length) {
        todoList.innerHTML = "<p>No todos found. Please add some tasks.</p>"
        return;
    }

    isTodoListEmpty = false;
    todos.map((todo) => {
        const newListItem = createListItem(todo)
        todoList.prepend(newListItem) // <ul><li>Go to School</li> <li>Go to Market</li> </ul>
    })
}