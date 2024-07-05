import { constructedTaskLiList, taskList } from "./index.js";
import render from "./render.js";

//GET ELEMENTS

function toggleNavBar() {
  const navBar = document.querySelector("[data-nav]");
  navBar.classList.toggle("hide");
  const contentArea = document.querySelector("[data-content-area]");
  contentArea.classList.toggle("hide");
  const menuExpandIcon = document.querySelector("[data-menu-expand]");
  menuExpandIcon.classList.toggle("rotate-180");
}

function toggleFilters() {
  const filters = document.querySelector("[data-filters]");
  filters.classList.toggle("hide");
  const filterExpandIcon = document.querySelector("[data-filter-expand]");
  filterExpandIcon.classList.toggle("rotate-0");
}

function toggleProjectsMenu() {
  const projects = document.querySelector("[data-projects]");
  projects.classList.toggle("hide");
  const projectsExpandIcon = document.querySelector("[data-projects-expand]");
  projectsExpandIcon.classList.toggle("rotate-0");
}

function toggleTaskInfo(divTaskInfoArea, taskExpandIcon) {
  divTaskInfoArea.classList.toggle("hide");
  taskExpandIcon.classList.toggle("rotate-180");
}

function deleteTask(event) {
  const respectiveListItem =
    event.target.parentNode.parentNode.parentNode.parentNode.parentNode;
  const respectiveListItemId = respectiveListItem.getAttribute("id");
  const indexMatchingTheId = constructedTaskLiList.findIndex(
    (item) => item.id === respectiveListItemId
  );

  constructedTaskLiList.splice(indexMatchingTheId, 1);
  taskList.splice(indexMatchingTheId, 1);

  render();
}

export { toggleTaskInfo, deleteTask, toggleNavBar, toggleProjectsMenu, toggleFilters };
