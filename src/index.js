//IMPORTS
import "../src/assets/styles/style.css";
import Task from "./Task.js";
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
const newTaskSubmitArea = document.querySelector("[data-new-task-submit-area]");
const modal = document.querySelector("[data-modal]");
/////////////////////////////////////////////////////////////////////////////////////////
//DECLARE LISTS
const taskList = [];
const projectList = [];
////////////////////////
//DECLARE EVENT LISTENERS
newTaskButton.addEventListener("click", () => {
  modal.showModal();
});
