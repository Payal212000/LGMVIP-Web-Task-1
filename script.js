let taskId = 1;

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <div class="task-item">
            <input type="checkbox" id="checkbox${taskId}" onchange="completeTask(${taskId})">
            <span class="task-text">${taskId}. ${taskInput.value}</span>
            <span class="date">Pending</span>
            <span class="delete" onclick="deleteTask(this)">Delete</span>
        </div>
    `;
    taskList.appendChild(taskItem);

    taskInput.value = "";
    taskId++;
}

function completeTask(id) {
    const checkbox = document.getElementById("checkbox" + id);
    const taskItem = checkbox.parentElement.parentElement;
    const dateSpan = taskItem.querySelector(".date");

    if (checkbox.checked) {
        const currentDate = new Date().toLocaleDateString("en-US");
        dateSpan.textContent = "Completed on " + currentDate;
        taskItem.classList.add("completed");
    } else {
        dateSpan.textContent = "Pending";
        taskItem.classList.remove("completed");
    }
}

function deleteTask(deleteButton) {
    const taskItem = deleteButton.parentElement.parentElement;
    taskItem.remove();
}


function clearAllTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; 
    taskId = 1; 
}