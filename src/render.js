import {
  taskList,
  constructedTaskLiList,
  constructedProjectLiList,
  projectList,
} from "./index.js";

function render() {
  renderListItemListsToUI();
  getAmountOfTasksInProjects();
  renderProjectsToUI();
}

function renderListItemListsToUI() {
  const taskUnorderedList = document.querySelector("[data-task-list]");
  taskUnorderedList.innerHTML = "";
  taskUnorderedList.append(...constructedTaskLiList);
}

function renderProjectsToUI() {
  const projectsUl = document.querySelector("[data-projects-list]");
  projectsUl.innerHTML = " ";

  constructedProjectLiList.forEach((listItem) => {
    const id = listItem.id;
    if (listItem.querySelector(".project-span-h4").textContent == 0) {
      constructedProjectLiList.splice("id", 1);
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
    });
  });
}

export default render;
