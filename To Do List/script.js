
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-button");
const taskList = document.getElementById("task-list");
addTaskButton.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim(); 
  if (taskText === "") {
    alert("Please enter a task."); 
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  taskItem.appendChild(taskSpan);

  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.classList.add("complete-button");
  completeButton.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
  });
  taskItem.appendChild(completeButton);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(taskItem);
  });
  taskItem.appendChild(deleteButton);

  taskList.appendChild(taskItem);
  taskInput.value = "";
}
