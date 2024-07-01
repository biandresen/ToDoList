import createElement from "./createElement.js";
import { projectList, constructedProjectLiList } from "./index.js";

const projectsUl = document.querySelector("[data-projects-list]");

function setupProjectElements(project) {
  let newestProject = projectList.length - 1;

  //CREATE ELEMENTS
  const projectListItem = createElement("li", "project-list-item");
  projectListItem.setAttribute("id", newestProject);
  projectListItem.setAttribute("name", project);
  const projectButton = createElement("button", "project-list-item-button", project);
  const projectTaskNrSpan = createElement("span", "project-task-number-span");
  const projectSpanH4 = createElement("h4", "project-span-h4");

  projectsUl.appendChild(projectListItem);
  projectListItem.append(projectButton, projectTaskNrSpan);
  projectTaskNrSpan.appendChild(projectSpanH4);

  constructedProjectLiList.push(projectListItem);
}

export { setupProjectElements };
