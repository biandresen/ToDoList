//IMPORTS
import "../src/assets/styles/style.css";
import { handleTaskSubmission } from "./taskHandler.js";
import { toggleNavBar, toggleProjectsMenu, toggleFilters } from "./eventFunctions.js";

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
const newTaskSubmitArea = document.querySelector("[data-new-task-submit-area]");
export const modal = document.querySelector("[data-modal]");

//DECLARATION OF LISTS
export const taskList = [];
export const constructedTaskLiList = [];
export const projectList = [];
export const constructedProjectLiList = [];
export const todayTaskList = [];
export const tomorrowTaskList = [];
export const monthTaskList = [];

//DECLARATION OF EVENT LISTENERS
menuButton.addEventListener("click", toggleNavBar);
filtersButton.addEventListener("click", toggleFilters);
projectsButton.addEventListener("click", toggleProjectsMenu);
newTaskButton.addEventListener("click", () => {
  modal.showModal();
});
newTaskSubmitArea.addEventListener("click", (event) => {
  event.preventDefault();
  handleTaskSubmission(event);
});

// editButton.addEventListener("click", () => {
//   const currentValue = editButton.getAttribute("data-edit-flag");
//   if (currentValue === "false") {
//     editButton.setAttribute("data-edit-flag", true);
//   } else {
//     editButton.setAttribute("data-edit-flag", false);
//   }
//   modal.showModal();
// });
