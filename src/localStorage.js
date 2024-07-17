import { taskUnorderedList } from "./index.js";

function saveData() {
  const taskTitles = [];
  taskUnorderedList.querySelectorAll("li").forEach((item) => {
    taskTitles.push(item.querySelector(".task-text").textContent.trim());
  });
  localStorage.setItem("taskTitles", JSON.stringify(taskTitles));

  const taskNotes = [];
  taskUnorderedList.querySelectorAll("li").forEach((item) => {
    taskNotes.push(item.querySelector(".note-paragraph").textContent.trim());
  });
  localStorage.setItem("taskNotes", JSON.stringify(taskNotes));

  const taskProjects = [];
  taskUnorderedList.querySelectorAll("li").forEach((item) => {
    taskProjects.push(item.querySelector(".project-paragraph").textContent.trim());
  });
  localStorage.setItem("taskProjects", JSON.stringify(taskProjects));

  const taskDates = [];
  taskUnorderedList.querySelectorAll("li").forEach((item) => {
    taskDates.push(item.querySelector(".due-date-paragraph").textContent.trim());
  });
  localStorage.setItem("taskDates", JSON.stringify(taskDates));

  const taskPriorities = [];
  taskUnorderedList.querySelectorAll("li").forEach((item) => {
    taskPriorities.push(item.querySelector(".priority-border").textContent.trim());
  });
  localStorage.setItem("taskPriorities", JSON.stringify(taskPriorities));

  const taskColors = [];
  taskUnorderedList.querySelectorAll("li").forEach((item) => {
    taskColors.push(
      item
        .querySelector(".check-box-checked")
        .getAttribute("style")
        .substring(7)
        .replace(";", "")
    );
  });
  localStorage.setItem("taskColors", JSON.stringify(taskColors));
}

function loadData() {
  return {
    getTitles: function () {
      const taskTitles = JSON.parse(localStorage.getItem("taskTitles"));
      return taskTitles;
    },
    getNotes: function () {
      const taskNotes = JSON.parse(localStorage.getItem("taskNotes"));
      return taskNotes;
    },
    getProjects: function () {
      const taskProjects = JSON.parse(localStorage.getItem("taskProjects"));
      return taskProjects;
    },
    getDates: function () {
      const taskDates = JSON.parse(localStorage.getItem("taskDates"));
      return taskDates;
    },
    getPriorities: function () {
      const taskPriorities = JSON.parse(localStorage.getItem("taskPriorities"));
      return taskPriorities;
    },
    getColors: function () {
      const taskColors = JSON.parse(localStorage.getItem("taskColors"));
      return taskColors;
    },
  };
}

export { saveData, loadData };
