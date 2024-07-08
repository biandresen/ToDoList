import {
  todayTaskList,
  tomorrowTaskList,
  monthTaskList,
  constructedTaskLiList,
  taskList,
} from "./index.js";
import { render, renderListItemListsToUI } from "./render.js";
import { filterFlag } from "./index.js";

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

function handleTaskCheck(iconChecked, iconUnchecked, divTaskHeader, taskText) {
  iconUnchecked.classList.toggle("hide");
  iconChecked.classList.toggle("hide");
  divTaskHeader.classList.toggle("low-opacity");
  taskText.classList.toggle("line-through");
}

function toggleTaskInfo(divTaskInfoArea, taskExpandIcon) {
  divTaskInfoArea.classList.toggle("hide");
  taskExpandIcon.classList.toggle("rotate-180");
}

function deleteTask(event) {
  const respectiveListItem =
    event.target.parentNode.parentNode.parentNode.parentNode.parentNode;
  const respectiveListItemId = respectiveListItem.getAttribute("id");

  //Find the id in allTasksList/constructedTaskLiList
  const indexMatchingTheId = constructedTaskLiList.findIndex(
    (item) => item.id === respectiveListItemId
  );
  //Find the id in todayTaskList
  const indexMatchingTheIdInTodayTaskList = todayTaskList.findIndex(
    (item) => item.id === respectiveListItemId
  );
  //Find the id in tomorrowTaskList
  const indexMatchingTheIdInTomorrowTaskList = tomorrowTaskList.findIndex(
    (item) => item.id === respectiveListItemId
  );
  const indexMatchingTheIdInMonthTaskList = monthTaskList.findIndex(
    (item) => item.id === respectiveListItemId
  );

  //delete/update all filtered lists so the respective deleted task is removed from all lists

  constructedTaskLiList.splice(indexMatchingTheId, 1);
  taskList.splice(indexMatchingTheId, 1);
  todayTaskList.splice(indexMatchingTheIdInTodayTaskList, 1);
  tomorrowTaskList.splice(indexMatchingTheIdInTomorrowTaskList, 1);
  monthTaskList.splice(indexMatchingTheIdInMonthTaskList, 1);

  //Make sure the updated list displays the tasks relative to the filter the user is on (or last clicked on)
  if (filterFlag === "allTasks") {
    renderListItemListsToUI(constructedTaskLiList);
  } else if (filterFlag === "todayTasks") {
    renderListItemListsToUI(todayTaskList);
  } else if (filterFlag === "tomorrowTasks") {
    renderListItemListsToUI(tomorrowTaskList);
  } else renderListItemListsToUI(monthTaskList);

  render();
}

export {
  handleTaskCheck,
  toggleTaskInfo,
  deleteTask,
  toggleNavBar,
  toggleProjectsMenu,
  toggleFilters,
};
