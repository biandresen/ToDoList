//IMPORTS
import "../src/assets/styles/style.css";
import { handleTaskSubmission } from "./taskHandler.js";
import { toggleNavBar, toggleProjectsMenu, toggleFilters } from "./eventFunctions.js";
import { renderFilteredTasks, resetForm } from "./render.js";

//GET ELEMENTS
const menuButton = document.querySelector("[data-menu-button]");
export const menuExpandText = document.querySelector("[data-menu-expand-text]");
const filtersButton = document.querySelector("[data-filters-button]");
const allTasksButton = document.querySelector("[data-all-tasks-button]");
const todayTasksButton = document.querySelector("[data-today-button]");
const tomorrowTasksButton = document.querySelector("[data-tomorrow-button]");
const monthTasksButton = document.querySelector("[data-month-button]");
const projectsButton = document.querySelector("[data-projects-button]");
const newTaskButton = document.querySelector("[data-new-task-button]");
const newTaskSubmitArea = document.querySelector("[data-new-task-submit-area]");
export const modal = document.querySelector("[data-modal]");

//DECLARATION OF LISTS
export const taskList = [];
export const projectList = [];
export const tasksSortedByProject = [];
export const todayTaskList = [];
export const tomorrowTaskList = [];
export const monthTaskList = [];
export const tasksMatchingProjectName = [];
export const filterFlag = ["allTasks"];

//DECLARATION OF EVENT LISTENERS
menuButton.addEventListener("click", toggleNavBar);

filtersButton.addEventListener("click", toggleFilters);

allTasksButton.addEventListener("click", () => {
  menuExpandText.textContent = "All Tasks";
  filterFlag[0] = "allTasks";
  renderFilteredTasks(taskList);
});

todayTasksButton.addEventListener("click", () => {
  menuExpandText.textContent = "Today";
  filterFlag[0] = "todayTasks";
  renderFilteredTasks(todayTaskList);
});

tomorrowTasksButton.addEventListener("click", () => {
  menuExpandText.textContent = "Tomorrow";
  filterFlag[0] = "tomorrowTasks";
  renderFilteredTasks(tomorrowTaskList);
});

monthTasksButton.addEventListener("click", () => {
  menuExpandText.textContent = "This Month";
  filterFlag[0] = "monthTasks";
  renderFilteredTasks(monthTaskList);
});

projectsButton.addEventListener("click", toggleProjectsMenu);

newTaskButton.addEventListener("click", () => {
  resetForm();
  modal.showModal();
});

newTaskSubmitArea.addEventListener("click", (event) => {
  event.preventDefault();
  handleTaskSubmission(event);
});
