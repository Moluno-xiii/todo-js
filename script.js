// Display all the items in the array as list items.
// Add functions to pop and push items from the array (add / delete).
// Display message if the array is empty
// Add functions to edit the text a specific item of an array, using the ID of the item.
// Add new array for completed tasks.
// Add option to append an item completed tasks array to the normal array

document.addEventListener("DOMContentLoaded", () => {
  let tasksArray = [];
  const finishedTasksArray = [];
  const myList = document.getElementById("tasksList");
  const addTask = document.getElementById("addTaskBtn");
  const placeholderElement = document.getElementById("placeholder");
  const noTask = document.getElementById("noTaskYet");
  const finishedTasksContainer = document.getElementById(
    "finishedTasksContainer"
  );

  const deleteItem = (itemID) => {
    tasksArray = tasksArray.filter((item) => item.id !== itemID);
    renderTasks();
  };

  const renderTasks = () => {
    myList.innerHTML = "";

    if (tasksArray.length === 0) {
      noTask.style.display = "block";
    } else {
      noTask.style.display = "none";
    }

    if (finishedTasksArray.length === 0) {
      finishedTasksContainer.style.display = "none";
    } else {
      finishedTasksContainer.style.display = "flex";
    }

    tasksArray.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.className =
        "flex px-3 py-1 flex-row justify-between w-full max-w-[700px] items-center bg-slate-600";

      const spanElement = document.createElement("span");
      spanElement.textContent = item.text;

      const divContainer = document.createElement("div");
      divContainer.className = "space-x-2 flex flex-row";

      const deleteButton = document.createElement("button");
      deleteButton.id = "deleteTaskBtn";
      deleteButton.className = "text-pantoneRed text-xs hover:text-opacity-75";
      deleteButton.textContent = "delete";
      deleteButton.onclick = () => deleteItem(item.id);

      const editButton = document.createElement("button");
      editButton.id = "editTaskBtn";
      editButton.className =
        "text-pantoneLightBlue text-xs hover:text-opacity-75";
      editButton.textContent = "edit";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      divContainer.appendChild(deleteButton);
      divContainer.appendChild(editButton);
      divContainer.appendChild(checkbox);

      listItem.appendChild(spanElement);
      listItem.appendChild(divContainer);

      console.log(listItem);
      myList.appendChild(listItem);
    });
  };

  addTask.onclick = () => {
    let taskText = placeholderElement.value;
    if (taskText) {
      tasksArray.push({ id: tasksArray.length + 1, text: taskText });
      placeholderElement.value = "";
      renderTasks();
    }
    console.log(tasksArray);
  };

  renderTasks();
});
