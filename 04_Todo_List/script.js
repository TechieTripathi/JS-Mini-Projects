function addTask() {
  let taskInput = document.getElementById("inputNewTask");
  console.log(taskInput);
  let taskText = taskInput.value.trim();
  console.log(taskText);

  if (taskText !== "") {
    const list_item = document.createElement("li");
    list_item.className = "taskListItem";

    // create a check box for this list
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    list_item.append(checkbox);

    //   Create a span for text and apeend it to list item
    const span = document.createElement("span");
    span.textContent = taskText;
    list_item.append(span);

    // Create a Delete button and append it to list item
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      list_item.remove();
    });

    list_item.append(deleteBtn);

    const taskList = document.getElementById("taskList");
    taskList.appendChild(list_item);
  }
  taskInput.value = "";
}

document.getElementById("addTask").addEventListener("click", function (e) {
  e.preventDefault();
  addTask();
});
