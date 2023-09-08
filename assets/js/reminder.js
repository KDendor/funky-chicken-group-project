document.addEventListener("DOMContentLoaded", () => {
  // Getting all required elements
  const inputField = document.querySelector(".input-field textarea");
  const todoLists = document.querySelector(".todoLists");
  const pendingNum = document.querySelector(".pending-num");
  const clearButton = document.querySelector(".clear-button");

  // Function to update the pending tasks count and visibility of clear button
  function updatePendingTasks() {
    const pendingTasks = document.querySelectorAll(".pending");

    // Update the pending tasks count
    pendingNum.textContent = pendingTasks.length === 0 ? "no" : pendingTasks.length;

    // Show/hide the clear button based on the presence of tasks
    if (pendingTasks.length > 0) {
      todoLists.style.marginTop = "20px";
      clearButton.style.pointerEvents = "auto";
    } else {
      todoLists.style.marginTop = "0px";
      clearButton.style.pointerEvents = "none";
    }
  }

  // Function to add a task when Enter is pressed
  inputField.addEventListener("keyup", (e) => {
    const inputVal = inputField.value.trim();

    if (e.key === "Enter" && inputVal.length > 0) {
      // Create a new list item
      const liTag = document.createElement("li");
      liTag.classList.add("list", "is-flex", "is-justify-content-space-between", "pending");

      // Create a checkbox
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", () => handleStatus(liTag));

      // Create the task text
      const taskText = document.createElement("span");
      taskText.classList.add("task");
      taskText.textContent = inputVal;

      // Create the delete icon
      const deleteIcon = document.createElement("i");
      deleteIcon.classList.add("uil", "uil-trash");
      deleteIcon.addEventListener("click", () => deleteTask(liTag));

      // Append elements to the list item
      liTag.appendChild(checkbox);
      liTag.appendChild(taskText);
      liTag.appendChild(deleteIcon);

      // Append the list item to the todo list
      todoLists.appendChild(liTag);

      inputField.value = "";
      updatePendingTasks();
    }
  });

  // Function to handle checking/unchecking the checkbox
  function handleStatus(taskElement) {
    const checkbox = taskElement.querySelector("input");
    const taskText = taskElement.querySelector(".task");
    taskElement.classList.toggle("pending");
    taskText.style.textDecoration = checkbox.checked ? "line-through" : "none";
    updatePendingTasks();
  }

  // Function to delete a task and its corresponding item
  function deleteTask(taskElement) {
    taskElement.remove();
    updatePendingTasks();
  }

  // Event listener for clearing all tasks
  clearButton.addEventListener("click", () => {
    todoLists.innerHTML = "";
    updatePendingTasks();
  });
});


