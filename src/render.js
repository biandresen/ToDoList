import { toggleNavBar } from "./eventFunctions.js";
import {
  menuExpandText,
  filterFlag,
  taskList,
  projectList,
  tasksSortedByProject,
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

function resetForm() {
  const inputs = document.querySelectorAll(
    "[data-new-task-form] input, [data-new-task-form] textarea"
  );
  inputs.forEach((input) => {
    input.value = "";
  });
}

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
  taskList.forEach((listItem) => {
    let respectiveDate =
      listItem.childNodes[1].childNodes[1].childNodes[1].childNodes[1].textContent;
    if (!todayTaskList.includes(listItem) && respectiveDate === todayDate) {
      todayTaskList.push(listItem);
    }
  });
  return todayTaskList.length;
}

function getTomorrowAmount() {
  taskList.forEach((listItem) => {
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
  taskList.forEach((listItem) => {
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

  projectList.forEach((project) => {
    const id = project.getAttribute("id");
    if (project.querySelector(".project-span-h4").textContent == 0) {
      projectList.splice(id, 1);
    }
  });
  projectsUl.append(...projectList);
}

function getAmountOfTasksInProjects() {
  projectList.forEach((item) => {
    let projectName = item.getAttribute("name");
    let amount = 0;
    for (let i = 0; i < taskList.length; i++) {
      if (
        taskList[i].getElementsByClassName("project-paragraph")[0].innerText ===
        projectName
      ) {
        amount++;
      }
    }
    projectList.forEach((project) => {
      if (project.getAttribute("name") === projectName) {
        project.querySelector(".project-span-h4").textContent = amount;
      }
    });
  });
}

function renderProjectTasks(event) {
  const targetProjectName = event.target.textContent;
  taskList.forEach((task) => {
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
  const projectName = event.target.textContent;
  menuExpandText.textContent = projectName;
  taskList.forEach((task) => {
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
  getTodayDate,
  resetForm,
};
