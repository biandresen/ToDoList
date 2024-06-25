//IMPORTS
import "../src/assets/styles/style.css";
import { submitTask } from "./submitTask.js";
////////////////////////////////////////////

//GET ELEMENTS
const menuButton = document.querySelector("[data-menu-button]");
const filtersButton = document.querySelector("[data-filters-button]");
const allTasksButton = document.querySelector("[data-all-tasks-button]");
const todayButton = document.querySelector("[data-today-button]");
const tomorrowButton = document.querySelector("[data-tomorrow-button]");
const weekButton = document.querySelector("[data-week-button]");
const monthButton = document.querySelector("[data-month-button]");
const projectsButton = document.querySelector("[data-projects-button]");
const newTaskButton = document.querySelector("[data-new-task-button]");
export const editButton = document.querySelector("[data-edit-button]");
const newTaskSubmitArea = document.querySelector("[data-new-task-submit-area]");
export const modal = document.querySelector("[data-modal]");
/////////////////////////////////////////////////////////////////////////////////////////
//DECLARE LISTS
export const taskList = [];
export const projectList = [];
////////////////////////
//DECLARE EVENT LISTENERS
newTaskButton.addEventListener("click", () => {
  modal.showModal();
});
newTaskSubmitArea.addEventListener("click", (event) => {
  event.preventDefault();
  submitTask(event);
});
editButton.addEventListener("click", () => {
  const currentValue = editButton.getAttribute("data-edit-flag");
  if (currentValue === "false") {
    editButton.setAttribute("data-edit-flag", true);
  } else {
    editButton.setAttribute("data-edit-flag", false);
  }
  modal.showModal();
});
