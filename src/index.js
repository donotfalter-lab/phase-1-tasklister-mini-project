document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
const createTaskForm = document.getElementById("create-task-form");

createTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskDescription = event.target.elements["new-task-description"].value;

    buildToDo(taskDescription);
});

function buildToDo(task) {
    const li = document.createElement("li");
    li.textContent = task;

    const taskList = document.getElementById("tasks");
    taskList.append(li);
}