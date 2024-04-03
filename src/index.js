import "./style.css";
import "./checkbox.css";
import {
  createNewProject,
  filterTasks,
  projectsArray,
  recoverProjects,
} from "./projects";
import { createNewToDo, todayDate, showTodayTasks } from "./toDo";

const mainContent = document.querySelector(".mainContent");
const dialog = document.querySelector(".newTodoDialog");
const newTodo = document.querySelector(".newToDo");
const closeBt = document.querySelector(".close");
const newProjectBt = document.querySelector("#newProject");
const cancel = document.querySelector(".cancel");
const projectDialog = document.querySelector(".projectDialog");
const ul = document.querySelector("ul");
const projectImput = document.querySelector("#NewProjectImput");
const projectForm = document.querySelector("#Project");
const taskForm = document.querySelector(".createTask");
const titleImput = document.querySelector(".title");
const descriptionImput = document.querySelector(".description");
const dueDateImput = document.querySelector(".date");

newTodo.onclick = () => {
  dialog.show();
  todayDate();
};

closeBt.onclick = () => {
  dialog.close();
};

newProjectBt.onclick = () => {
  projectDialog.show();
};

cancel.onclick = () => {
  projectDialog.close();
};

document.addEventListener("DOMContentLoaded", (e) => {
  const projectProperty = "project";
  recoverProjects(projectsArray, ul, projectProperty);

  const defaultProjectName = " All";
  const defaultProject = filterTasks(
    projectsArray,
    defaultProjectName,
    projectProperty
  );
  if (defaultProject.length === 0) {
    const defaultImput = document.querySelector("#newProject");
    createNewProject(defaultImput, ul, e);
  }
  const allProjectBt = document.querySelector(".projectLi");
  allProjectBt.click();
});

projectForm.addEventListener("submit", (e) => {
  createNewProject(projectImput, ul, e);
  projectForm.reset();
  projectDialog.close();
});

taskForm.addEventListener("submit", (e) => {
  createNewToDo(
    titleImput,
    descriptionImput,
    dueDateImput,
    currentProject,
    e,
    mainContent
  );
  dialog.close();
  taskForm.reset();
});

showTodayTasks(mainContent);

export { mainContent };
