import { modal, taskList } from "./index.js";
import { projectList } from "./index.js";
import Task from "./Task.js";
import { editButton } from "./index.js";

const SUBMIT = "submit";
const taskForm = document.querySelector("[data-new-task-form]");
const taskInput = document.querySelector("[data-new-task-input]");
const noteInput = document.querySelector("[data-new-note-input]");
const projectInput = document.querySelector("[data-new-project-input]");
const dateInput = document.querySelector("[data-new-date-input]");
const colorInput = document.querySelector("[data-new-color-input]");
const priorityInput = document.querySelector('input[name="priority"]:checked');

function submitTask(event) {
  if (event.target.getAttribute("type") === SUBMIT) {
    createTask();
    modal.close();
  } else if (editButton.getAttribute("data-edit-flag") === true) {
    editTask();
  } else {
    modal.close();
  }
  taskForm.reset();
}

function createTask() {
  const id = taskList.length;
  const task = new Task(
    taskInput.value,
    noteInput.value,
    projectInput.value,
    dateInput.value,
    priorityInput.value,
    colorInput.value,
    id
  );

  taskList.push(task);
  pushProjectToList(task.project);
  console.table(task);
  console.table(projectList);

//   renderTaskDisplay();
}

// function editTask() {
//   const existingID = task.id;
//   taskList[existingID] = task;
// }

// function renderTaskDisplay(){

// }

function pushProjectToList(project) {
  if (projectList.includes(project)) return;
  projectList.push(project);
}

export { submitTask };
