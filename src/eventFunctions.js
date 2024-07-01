import { constructedTaskLiList, taskList } from "./index.js";
import render from "./render.js";

//GET ELEMENTS

function toggleNavBar() {
  const navBar = document.querySelector("[data-nav]");
  navBar.classList.toggle("hide");
}

function toggleFilters() {
  const filters = document.querySelector("[data-filters]");
  filters.classList.toggle("hide");
}

function toggleProjectsMenu() {
  const projects = document.querySelector("[data-projects]");
  projects.classList.toggle("hide");
}

function toggleTaskInfo(divTaskInfoArea) {
  divTaskInfoArea.classList.toggle("hide");
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
