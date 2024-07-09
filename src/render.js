import { toggleNavBar } from "./eventFunctions.js";
import {
  filterFlag,
  taskList,
  constructedTaskLiList,
  constructedProjectLiList,
  tasksSortedByProject,
  projectList,
  todayTaskList,
  tomorrowTaskList,
  monthTaskList,
  tasksMatchingProjectName,
} from "./index.js";

let todayDate = getTodayDate();
let [, todayMonth, todayDay] = todayDate.split("-");
const allTasksAmount = document.querySelector("[data-all-tasks-number]");
const todayAmount = document.querySelector("[data-today-number]");
const tomorrowAmount = document.querySelector("[data-tomorrow-number]");
const monthAmount = document.querySelector("[data-month-number]");

function render() {
  getAmountOfTasksInProjects();
  renderProjectsToUI();
  getAmountOfTasksInFilters();
}

function renderFilteredTasks(list) {
  renderListItemListsToUI(list);
  toggleNavBar();
}

function getAmountOfTasksInFilters() {
  allTasksAmount.textContent = taskList.length;
  todayAmount.textContent = getTodayAmount();
  tomorrowAmount.textContent = getTomorrowAmount();
  monthAmount.textContent = getMonthAmount();
}

function getTodayDate() {
  let today = new Date();
  let year = today.getFullYear();
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getTodayAmount() {
  constructedTaskLiList.forEach((listItem) => {
    let respectiveDate =
      listItem.childNodes[1].childNodes[1].childNodes[1].childNodes[1].textContent;
    if (!todayTaskList.includes(listItem) && respectiveDate === todayDate) {
      todayTaskList.push(listItem);
    }
  });
  return todayTaskList.length;
}

function getTomorrowAmount() {
  constructedTaskLiList.forEach((listItem) => {
    let respectiveDate =
      listItem.childNodes[1].childNodes[1].childNodes[1].childNodes[1].textContent;
    let [, , respectiveDay] = respectiveDate.split("-");
    if (
      !tomorrowTaskList.includes(listItem) &&
      Number(respectiveDay) === Number(todayDay) + 1
    ) {
      tomorrowTaskList.push(listItem);
    }
  });
  return tomorrowTaskList.length;
}

function getMonthAmount() {
  constructedTaskLiList.forEach((listItem) => {
    let respectiveDate =
      listItem.childNodes[1].childNodes[1].childNodes[1].childNodes[1].textContent;
    let [, respectiveMonth] = respectiveDate.split("-");
    if (
      !monthTaskList.includes(listItem) &&
      Number(respectiveMonth) === Number(todayMonth)
    ) {
      monthTaskList.push(listItem);
    }
  });
  return monthTaskList.length;
}

function renderListItemListsToUI(list) {
  const taskUnorderedList = document.querySelector("[data-task-list]");
  taskUnorderedList.innerHTML = "";
  taskUnorderedList.append(...list);
}

function renderProjectsToUI() {
  const projectsUl = document.querySelector("[data-projects-list]");
  projectsUl.innerHTML = "";

  constructedProjectLiList.forEach((listItem) => {
    const id = listItem.id;
    if (listItem.querySelector(".project-span-h4").textContent == 0) {
      constructedProjectLiList.splice(id, 1);
    }
  });
  projectsUl.append(...constructedProjectLiList);
}

function getAmountOfTasksInProjects() {
  projectList.forEach((project) => {
    let amount = 0;
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].project === project) amount++;
    }
    constructedProjectLiList.forEach((listItem) => {
      if (listItem.getAttribute("name") === project) {
        listItem.querySelector(".project-span-h4").textContent = amount;
      }
      if (amount <= 0) {
        listItem.remove();
      }
    });
  });
}

function renderProjectTasks(event) {
  const targetProjectName = event.target.textContent;
  constructedTaskLiList.forEach((task) => {
    if (
      task.childNodes[1].childNodes[1].childNodes[0].childNodes[1].textContent ==
      targetProjectName
    ) {
      tasksMatchingProjectName.push(task);
    }
  });
}

function setupProjectFilterList(event) {
  //reset list before displaying new tasks based on it's filter
  tasksSortedByProject.length = 0;
  filterFlag[0] = "project";
  console.log(filterFlag[0]);
  const projectName = event.target.textContent;
  constructedTaskLiList.forEach((task) => {
    if (
      task.childNodes[1].childNodes[1].childNodes[0].childNodes[1].textContent ==
      projectName
    ) {
      tasksSortedByProject.push(task);
    }
  });
  renderFilteredTasks(tasksSortedByProject);
}

export {
  render,
  renderFilteredTasks,
  renderProjectTasks,
  renderListItemListsToUI,
  setupProjectFilterList,
};
