function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim(); 

  if (taskText === "") {
    alert("Please enter a task ☹️");
    return;
  }

  let li = document.createElement("li");
  li.textContent = taskText;

 
  li.onclick = function () {
    li.classList.toggle("done");
  };

  
  li.oncontextmenu = function (e) {
    e.preventDefault(); 
    li.remove(); 
  };

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

document.getElementById("taskInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});