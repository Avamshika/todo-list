const inputBox = document.querySelector(".input-box input");
const addBtn = document.querySelector(".add-btn");
const listContainer = document.getElementById("list-container");
function addTask() {
    const taskText = inputBox.value.trim();
    if (taskText === '') {
        alert("Please enter a task.");
        return;
    }
    const li = document.createElement("li");
    li.innerText = taskText;
    listContainer.appendChild(li);
    inputBox.value = "";

    const span = document.createElement("span");
    span.innerHTML = "&#10006;";
    li.appendChild(span);

    span.addEventListener("click", function(e) {
        e.stopPropagation();
        listContainer.removeChild(li);
    });

    li.addEventListener("click", function() {
        li.classList.toggle("checked");
    });
}

addBtn.addEventListener("click", addTask);

inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }   
});
