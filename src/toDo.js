import { setData, lookData, deleteFromLocalStorage } from "./localStorage";
import {
  currentProject,
  filterTasks,
  titleProperty,
  descriptionProperty,
  recoverTasks,
  deleteTasks,
} from "./projects";
import { mainContent } from ".";

let taskChecked;

class ToDo {
  constructor(title, description, dueDate, project, completed) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.project = project;
    this.completed = completed;
  }
}

const seeDetails = (parent) => {
  const detailsDi = document.createElement("dialog");
  detailsDi.classList.add("Details");

  const title = document.createElement("div");
  title.classList.add("detailsTitle");

  const description = document.createElement("div");
  description.classList.add("descriptionDetails");

  const dueDate = document.createElement("div");
  dueDate.classList.add("duedateDescription");

  const closeDetails = document.createElement("button");
  closeDetails.textContent = "Close";
  closeDetails.addEventListener("click", () => {
    detailsDi.close();
  });

  detailsDi.appendChild(title);
  detailsDi.appendChild(description);
  detailsDi.appendChild(dueDate);
  detailsDi.appendChild(closeDetails);
  parent.appendChild(detailsDi);

  return detailsDi;
};

let numberForId = 0;
let toDoArray = lookData("tasks") || [];

const newTodoDOM = (titleImput, descriptionImput, dateInput, obj, parent) => {
  numberForId++;

  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("taskDiv");

  const container = document.createElement("div");
  container.classList.add("container1");

  const container2 = document.createElement("div");
  container2.classList.add("container2");

  const todoContainer = document.createElement("div");
  todoContainer.classList.add("todoContainer");

  const checkboxWrapper = document.createElement("div");
  checkboxWrapper.classList.add("checkbox-wrapper-19");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("id", `${numberForId}cbtest-19`);
  checkbox.setAttribute("type", "checkbox");

  const taskName = document.createElement("div");
  taskName.textContent = titleImput;

  checkbox.addEventListener("change", () => {
    taskDone(checkbox, taskName, toDoDiv);
  });

  const label = document.createElement("label");
  label.classList.add("check-box");
  label.setAttribute("for", `${numberForId}cbtest-19`);

  const seeDetailsbt = document.createElement("button");
  seeDetailsbt.classList.add("seeDetails");
  seeDetailsbt.textContent = "▼";

  const detailsDialog = seeDetails(toDoDiv);

  seeDetailsbt.addEventListener("click", (event) => {
    const toDoDiv = event.currentTarget.closest(".taskDiv");
    const descriptionDiv = toDoDiv.querySelector(".descriptionDetails");
    const dateDiv = toDoDiv.querySelector(".duedateDescription");

    descriptionDiv.textContent = `Description: ${descriptionImput}`;
    dateDiv.textContent = `Due Date: ${dateInput}`;

    detailsDialog.showModal();
  });

  const deleteTasks = document.createElement("button");
  deleteTasks.textContent = "🗑️";
  deleteTasks.addEventListener("click", () => {
    const titleProperty = "title";
    const setName = "tasks";
    deleteFromLocalStorage(
      toDoArray,
      titleProperty,
      taskName.textContent,
      setName
    );
    parent.removeChild(toDoDiv);
  });
  checkboxWrapper.appendChild(checkbox);
  checkboxWrapper.appendChild(label);
  todoContainer.appendChild(checkboxWrapper);
  todoContainer.appendChild(taskName);
  container2.appendChild(seeDetailsbt);
  container2.appendChild(deleteTasks);
  toDoDiv.appendChild(todoContainer);
  toDoDiv.appendChild(container2);

  parent.appendChild(toDoDiv);
};

const createNewToDo = (
  titleImput,
  descriptionImput,
  dueDateImput,
  currentProject,
  e,
  completed,
  parent
) => {
  e.preventDefault();
  const newToDo = new ToDo(
    titleImput.value,
    descriptionImput.value,
    dueDateImput.value,
    currentProject,
    completed
  );
  newTodoDOM(
    titleImput.value,
    descriptionImput.value,
    dueDateImput.value,
    false,
    parent
  );
  toDoArray.push(newToDo);
  setData(`tasks`, toDoArray);
};

const todayDate = (input) => {
  let currentDate = new Date().toISOString().split("T")[0];
  input.value = currentDate;
};

const showTodayTasks = () => {
  const todayBt = document.querySelector("h4");
  const dateProperty = "dueDate";
  todayBt.addEventListener("click", () => {
    let currentDate = new Date().toISOString().split("T")[0];
    deleteTasks();
    let todayTasks = filterTasks(toDoArray, currentDate, dateProperty);
    console.log(todayTasks);
    recoverTasks(
      todayTasks,
      titleProperty,
      descriptionProperty,
      dateProperty,
      mainContent
    );
    const projectTitleDiv = document.querySelector(".projectTitle");
    projectTitleDiv.textContent = "Today";
    const addTaskButton = document.querySelector(".newToDo");
    addTaskButton.style.display = "none";
  });
};

const closeDialogs = (dialogs, forms) => {
  forms.reset();
  dialogs.close();
};

const taskDone = (myCheckbox, taskText, toDoDiv) => {
  if (myCheckbox.checked) {
    taskText.style.textDecoration = "line-through";
    taskText.style.color = "gray";
    myCheckbox.classList.add("checked");
    setTimeout(() => {
      toDoDiv.style.display = "none";
    }, 3000);
    const titleProperty = "title";
    const setName = "tasks";
    deleteFromLocalStorage(
      toDoArray,
      titleProperty,
      taskText.textContent,
      setName
    );
  } else {
    taskText.style.textDecoration = "none";
    taskText.style.color = "rgb(0, 65, 119)";
    myCheckbox.classList.remove("checked");
  }
};

const addNewTasks = (mainContent) => {
  const newTodoDialog = document.createElement("dialog");
  newTodoDialog.classList.add("newTodoDialog");
  newTodoDialog.style.width = "210px";
  newTodoDialog.open = true;

  const createTaskForm = document.createElement("form");
  createTaskForm.action = "submit";
  createTaskForm.classList.add("createTask");

  createTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    createNewToDo(
      titleInput,
      descriptionTextarea,
      dateInput,
      currentProject,
      e,
      false,
      mainContent
    );
    closeDialogs(newTodoDialog, createTaskForm);
  });

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.classList.add("title");
  titleInput.required = true;
  titleInput.placeholder = "Nombre";

  const descriptionTextarea = document.createElement("textarea");
  descriptionTextarea.name = "descripción";
  descriptionTextarea.classList.add("description");
  descriptionTextarea.cols = "20";
  descriptionTextarea.rows = "2";
  descriptionTextarea.placeholder = "Descripción";

  const dateLabel = document.createElement("label");
  dateLabel.textContent = "Due Date:";

  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.classList.add("date");
  dateInput.required = true;
  todayDate(dateInput);

  const addButton = document.createElement("button");
  addButton.type = "submit";
  addButton.textContent = "Agregar";

  const cancelButton = document.createElement("button");
  cancelButton.classList.add("cerrar");
  cancelButton.type = "button";
  cancelButton.textContent = "Cancelar";

  dateLabel.appendChild(dateInput);
  createTaskForm.appendChild(titleInput);
  createTaskForm.appendChild(descriptionTextarea);
  createTaskForm.appendChild(document.createElement("br"));
  createTaskForm.appendChild(dateLabel);
  createTaskForm.appendChild(document.createElement("br"));
  createTaskForm.appendChild(addButton);
  createTaskForm.appendChild(cancelButton);
  newTodoDialog.appendChild(createTaskForm);
  mainContent.appendChild(newTodoDialog);
};

export {
  ToDo,
  showTodayTasks,
  createNewToDo,
  newTodoDOM,
  todayDate,
  taskDone,
  closeDialogs,
  toDoArray,
  addNewTasks,
  taskChecked,
};
