document.addEventListener("DOMContentLoaded", () => {
  let tasksArray = [];
  let finishedTasksArray = [];
  const myList = document.getElementById("tasksList");
  const addTask = document.getElementById("addTaskBtn");
  const placeholderElement = document.getElementById("placeholder");
  const noTask = document.getElementById("noTaskYet");
  const clearAllTasks = document.getElementById("clearTasks");
  const clearFinishedTasks = document.getElementById("clearFinishedTasks");
  const finishedTasksContainer = document.getElementById(
    "finishedTasksContainer"
  );

  const handleAddTask = () => {
    let taskText = placeholderElement.value.trim();
    if (taskText) {
      tasksArray.push({ id: tasksArray.length + 1, text: taskText });
      placeholderElement.value = "";
      renderTasks();
      renderFinishedTasks();
    }
  };

  const onClearTasks =  () => {
    tasksArray = [];
    renderTasks()
  }

  const onClearFinishedTasks =  () => {
    finishedTasksArray = [];
    renderFinishedTasks()
  }

  const handleDeleteItem = (itemID) => {
    tasksArray = tasksArray.filter((item) => item.id !== itemID);
    renderTasks();
  };

  const handleCheckedItem = (task) => {
    finishedTasksArray.push({ id: task.id, text: task.text });
    tasksArray = tasksArray.filter((item) => item.id !== task.id);
    renderTasks();
    renderFinishedTasks();
  };

  const handleUndoDelete = (task) => {
    tasksArray.push({ id: task.id, text: task.text });
    finishedTasksArray = finishedTasksArray.filter(
      (item) => item.id !== task.id
    );
    renderTasks();
    renderFinishedTasks();
  };

    addTask.onclick = handleAddTask;
    placeholderElement.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        handleAddTask();
      }
    });

  const renderTasks = () => {
    myList.innerHTML = "";

    if (tasksArray.length === 0) {
      noTask.style.display = "block";
      clearAllTasks.style.display = "none";
    } else {
      noTask.style.display = "none";
      clearAllTasks.style.display = "block";
    }

    if (finishedTasksArray.length === 0) {
      finishedTasksContainer.style.display = "none";
    } else {
      finishedTasksContainer.style.display = "flex";
    }

    clearAllTasks.onclick = onClearTasks

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
      deleteButton.className = "bg-pantoneRed hover:bg-opacity-70 transition-all duration-300 py-1 px-2 text-black text-xs hover:text-opacity-75";
      deleteButton.textContent = "delete";
      deleteButton.onclick = () => handleDeleteItem(item.id);

      const editButton = document.createElement("button");
      editButton.id = "editTaskBtn";
      editButton.className =
        "text-pantoneLightBlue text-xs hover:text-opacity-75";
      editButton.textContent = "edit";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.onclick = () => handleCheckedItem(item);

      divContainer.appendChild(deleteButton);
    //   divContainer.appendChild(editButton);
      divContainer.appendChild(checkbox);

      listItem.appendChild(spanElement);
      listItem.appendChild(divContainer);
      myList.appendChild(listItem);
    });
  };

  const renderFinishedTasks = () => {
    finishedTasksContainer.innerHTML = "";
    const finishedHeader = document.getElementById("finishedHeader");
    if (!finishedTasksArray.length) {
      finishedHeader.style.display = "none";
      clearFinishedTasks.style.display = "none";
    } else {
      finishedHeader.style.display = "block";
      clearFinishedTasks.style.display = "block";
    }

    clearFinishedTasks.onclick = onClearFinishedTasks

    finishedTasksArray.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.className =
        "flex px-3 py-1 flex-row justify-between w-full max-w-[700px] items-center bg-slate-600";

      const spanElement = document.createElement("span");
      spanElement.textContent = item.text;

      const divContainer = document.createElement("div");
      divContainer.className = "space-x-2 flex flex-row";

      const undoButton = document.createElement("button");
      undoButton.id = "undoTaskBtn";
      undoButton.className =
        "text-white text-xs hover:text-opacity-75 p-2 duration-300 transition-all rounded-md bg-pantoneLightBlue";
      undoButton.textContent = "Mark as Unfinished";
      undoButton.onclick = () => handleUndoDelete(item);

      divContainer.appendChild(undoButton);

      listItem.appendChild(spanElement);
      listItem.appendChild(divContainer);
      finishedTasksContainer.appendChild(listItem);
    });
  };

  renderTasks();
  renderFinishedTasks();
});
