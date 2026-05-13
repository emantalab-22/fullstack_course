const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

let tasks = [];
//const savedTasks = JSON.parse(localStorage.getItem("tasks"));
//if (savedTasks) {
   // tasks = savedTasks;

    //tasks.forEach(task => {
    //    const li = document.createElement("li");
      //  li.textContent = task;
      //  list.appendChild(li);
   // });
//}
try {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
        tasks = savedTasks;
        tasks.forEach(task => {
      const li = document.createElement("li");
      li.textContent = task;
      list.appendChild(li);
  });

    }
} catch(error) {
    console.error("Invalid JSON in localStorage");
}
//let tasks = [];
document.getElementById("add-btn").addEventListener("click", () => {

    const value = input.value;
    tasks.push(value);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    const li = document.createElement("li");
    li.textContent = value;
    list.appendChild(li);
    input.value = "";
if (value === "") {
    console.error("Task input is empty");
    return;
}
if (value === "") {
    console.error("Task input is empty");
    return;
} 

});