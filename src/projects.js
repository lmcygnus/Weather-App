import { setData, lookData, deleteFromLocalStorage } from "./localStorage";
import { mainContent } from ".";
import {
  newTodoDOM,
  toDoArray,
  addNewTasks,
} from "./toDo";

let currentProject = " All";
const titleProperty = "title";
const descriptionProperty = "description";
const dateProperty = "dueDate";

class projects {
  constructor(project) {
    this.project = project;
  }
}

const deleteElements = (mainContent) => {
  while (mainContent.firstChild) {
    mainContent.removeChild(mainContent.firstChild);
  }
};

let projectsArray = lookData("projects") || [];

const filterTasks = (array, currentProject, property) => {
  return array.filter(function (object) {
    return object[property] === currentProject;
  });
};

const deleteTasks = () => {
  const taskstoDelete = Array.from(document.querySelectorAll(".taskDiv"));
  taskstoDelete.forEach(function (element) {
    element.parentNode.removeChild(element);
  });
};

const recoverProjects = (array, parent, propertyName) => {
  array.forEach((element) => {
    newProjectDOM(element, parent, propertyName);
  });
};

const recoverTasks = (
  array,
  titleProperty,
  descriptionProperty,
  dateProperty,
  mainContent
) => {
  array.forEach((element) => {
    newTodoDOM(
      element[titleProperty],
      element[descriptionProperty],
      element[dateProperty],
      element,
      mainContent
    );
  });
};

const newProjectDOM = (input, parent, propertyName) => {
  const newProjectLi = document.createElement("li");

  const libutton = document.createElement("button");
  libutton.textContent = input[propertyName];
  libutton.classList.add("projectLi");

  const deleteProject = document.createElement("button");
  deleteProject.textContent = "🗑️";
  deleteProject.classList.add("deleteProject");

  deleteProject.addEventListener("click", () => {
    const projectProperty = "project";
    const setName = "projects";
    const setName2 = "tasks";
    deleteFromLocalStorage(
      projectsArray,
      projectProperty,
      libutton.textContent,
      setName
    );
    deleteFromLocalStorage(
      toDoArray,
      projectProperty,
      libutton.textContent,
      setName2
    );
    parent.removeChild(newProjectLi);
  });

  let filteredTasks;

  newProjectLi.appendChild(libutton);
  newProjectLi.appendChild(deleteProject);
  parent.appendChild(newProjectLi);
  libutton.click();

  libutton.addEventListener("click", (event) => {
    currentProject = event.target.textContent;
    if (currentProject === "All") {
      let tasks = lookData("tasks");
      deleteTasks();
      projectAddTask(mainContent, input, titleProperty);
      recoverTasks(
        tasks,
        titleProperty,
        descriptionProperty,
        dateProperty,
        mainContent
      );
      const projectTitleDiv = document.querySelector(".projectTitle");
      projectTitleDiv.textContent = currentProject;
      newProjectLi.removeChild(deleteProject);
    } else {
      const projectProperty = "project";
      filteredTasks = filterTasks(toDoArray, currentProject, projectProperty);
      deleteTasks();
      projectAddTask(mainContent, input, titleProperty);
      recoverTasks(
        filteredTasks,
        titleProperty,
        descriptionProperty,
        dateProperty,
        mainContent
      );
      const projectTitleDiv = document.querySelector(".projectTitle");
      projectTitleDiv.textContent = currentProject;
    }
  });
};

const projectAddTask = (mainContent, input, propertyName) => {
  deleteElements(mainContent);

  const projectTitle = document.createElement("div");

  if (propertyName === "value") {
    projectTitle.textContent = `${input.value}`;
  } else if (propertyName === "textContent") {
    projectTitle.textContent = `${input.textContent}`;
  } else if (propertyName === "project") {
    projectTitle.textContent = `${input.project}`;
  }

  projectTitle.classList.add("projectTitle");

  const addTask = document.createElement("button");
  addTask.classList.add("newToDo");
  addTask.textContent = "+Add Task";
  addTask.style.display = "block";

  mainContent.appendChild(projectTitle);
  mainContent.appendChild(addTask);
  addTask.addEventListener("click", (e) => {
    e.preventDefault();
    addNewTasks(mainContent);
  });
};

const createNewProject = (input, parent, e) => {
  e.preventDefault();
  if (projectsArray.some((object) => object.project === input.value)) {
    return;
  } else {
    const newProject = new projects(input.value);
    const newProperty = "value";
    projectAddTask(mainContent, input, newProperty);
    newProjectDOM(input, parent, newProperty);
    projectsArray.push(newProject);
    setData("projects", projectsArray);
  }
};

export {
  projects,
  createNewProject,
  newProjectDOM,
  addNewTasks,
  projectAddTask,
  deleteTasks,
  filterTasks,
  projectsArray,
  recoverProjects,
  recoverTasks,
  currentProject,
  titleProperty,
  descriptionProperty,
  dateProperty,
};
