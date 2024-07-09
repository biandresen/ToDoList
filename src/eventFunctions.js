import {
  todayTaskList,
  tomorrowTaskList,
  monthTaskList,
  constructedTaskLiList,
  taskList,
  tasksSortedByProject,
} from "./index.js";
import { render, renderListItemListsToUI } from "./render.js";
import { filterFlag, modal } from "./index.js";
import { taskForm } from "./taskHandler.js";
export const editFlag = ["false"];
export let editListTaskID = 0;

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

function editTask(event) {
  editFlag[0] = "true";
  editListTaskID =
    event.target.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute(
      "id"
    );
  const respectiveTask = constructedTaskLiList.find(
    (task) => task.getAttribute("id") == editListTaskID
  );

  const taskTitle = respectiveTask.getElementsByClassName("task-text")[0];
  const taskNote = respectiveTask.getElementsByClassName("note-paragraph")[0];
  const taskProjectName = respectiveTask.getElementsByClassName("project-paragraph")[0];
  const taskDate = respectiveTask.getElementsByClassName("due-date-paragraph")[0];
  const taskColor = respectiveTask.getElementsByClassName("color-info-icon")[0];
  const taskPriorityLow = respectiveTask.getElementsByClassName("low-priority-box")[0];
  const taskPriorityMed = respectiveTask.getElementsByClassName("med-priority-box")[0];
  const taskPriorityHigh = respectiveTask.getElementsByClassName("high-priority-box")[0];

  const formTaskTitle = taskForm[0];
  const formTaskNote = taskForm[1];
  const formTaskProjectName = taskForm[2];
  const formTaskDate = taskForm[3];
  const formTaskColor = taskForm[4];
  const formTaskPriorityLow = taskForm[5];
  const formTaskPriorityMed = taskForm[6];
  const formTaskPriorityHigh = taskForm[7];

  console.log(formTaskPriorityLow);
  console.log(taskPriorityLow);
  console.log(taskPriorityMed);
  console.log(taskPriorityHigh);
  formTaskTitle.setAttribute("value", taskTitle.textContent);
  formTaskNote.setAttribute("value", taskNote.textContent);
  formTaskProjectName.setAttribute("value", taskProjectName.textContent);
  formTaskDate.setAttribute("value", taskDate.textContent);
  formTaskColor.setAttribute("value", taskColor.style.color);

  if (taskPriorityLow.classList.contains("priority-border")) {
    formTaskPriorityLow.checked = true;
  } else if (taskPriorityMed.classList.contains("priority-border")) {
    formTaskPriorityMed.checked = true;
  } else formTaskPriorityHigh.checked = true;
  modal.showModal();
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
  //Find the id in monthTaskList
  const indexMatchingTheIdInMonthTaskList = monthTaskList.findIndex(
    (item) => item.id === respectiveListItemId
  );
  //Find the id in project-filter-list
  const indexMatchingTheIdInProjectTaskList = tasksSortedByProject.findIndex(
    (item) => item.id === respectiveListItemId
  );

  //delete/update all filtered lists so the respective deleted task is removed from all lists
  constructedTaskLiList.splice(indexMatchingTheId, 1);
  taskList.splice(indexMatchingTheId, 1);
  todayTaskList.splice(indexMatchingTheIdInTodayTaskList, 1);
  tomorrowTaskList.splice(indexMatchingTheIdInTomorrowTaskList, 1);
  monthTaskList.splice(indexMatchingTheIdInMonthTaskList, 1);
  tasksSortedByProject.splice(indexMatchingTheIdInProjectTaskList, 1);

  renderRespectiveFilterList();
  render();
}

function renderRespectiveFilterList() {
  if (filterFlag[0] == "allTasks") {
    renderListItemListsToUI(constructedTaskLiList);
  } else if (filterFlag[0] == "todayTasks") {
    renderListItemListsToUI(todayTaskList);
  } else if (filterFlag[0] == "tomorrowTasks") {
    renderListItemListsToUI(tomorrowTaskList);
  } else if (filterFlag[0] == "monthTasks") {
    renderListItemListsToUI(monthTaskList);
  } else if (filterFlag[0] == "project") {
    renderListItemListsToUI(tasksSortedByProject);
  }
}

export {
  renderRespectiveFilterList,
  handleTaskCheck,
  toggleTaskInfo,
  editTask,
  deleteTask,
  toggleNavBar,
  toggleProjectsMenu,
  toggleFilters,
};
