import { modal, taskList, projectList } from "./index.js";
import { setupProjectElements } from "./setupProjectElements.js";
import render from "./render.js";
import Task from "./Task.js";
import setupTaskElements from "./setupTaskElements.js";

const SUBMIT = "submit";
const taskForm = document.querySelector("[data-new-task-form]");
const taskInput = document.querySelector("[data-new-task-input]");
const noteInput = document.querySelector("[data-new-note-input]");
const projectInput = document.querySelector("[data-new-project-input]");
const dateInput = document.querySelector("[data-new-date-input]");
const colorInput = document.querySelector("[data-new-color-input]");

function handleTaskSubmission(event) {
  if (event.target.getAttribute("type") === SUBMIT) {
    const task = createTask();
    taskList.push(task);
    setupTaskElements(taskList);
    pushProjectToList(task.project);
    render();
    modal.close();
  } else {
    modal.close();
  }
  taskForm.reset();
}

function createTask() {
  const id = taskList.length;
  const priorityInput = document.querySelector('input[name="priority"]:checked');
  const task = new Task(
    taskInput.value,
    noteInput.value,
    projectInput.value,
    dateInput.value,
    priorityInput.value,
    colorInput.value,
    id
  );
  return task;
}

// function editTask() {
//   const existingID = task.id;
//   taskList[existingID] = task;
// }

function pushProjectToList(project) {
  if (projectList.includes(project)) return;
  projectList.push(project);
  setupProjectElements(project);
}

export { handleTaskSubmission };
