import createElement from "./createElement.js";
import { projectList } from "./index.js";
import { renderProjectTasks, setupProjectFilterList } from "./render.js";

function setupProjectElements(project) {
  const id = projectList.length;
  //CREATE ELEMENTS
  const projectListItem = createElement("li", "project-list-item");
  projectListItem.setAttribute("id", id);
  projectListItem.setAttribute("name", project);
  const projectButton = createElement("button", "project-list-item-button", project);
  const projectTaskNrSpan = createElement("span", "project-task-number-span");
  const projectSpanH4 = createElement("h4", "project-span-h4");

  projectListItem.append(projectButton, projectTaskNrSpan);
  projectTaskNrSpan.appendChild(projectSpanH4);
  projectList.push(projectListItem);

  //Add event listener to the respective project filter button
  projectButton.addEventListener("click", (event) => {
    renderProjectTasks(event);
  });

  projectListItem.addEventListener("click", (event) => {
    setupProjectFilterList(event);
  });
}

export { setupProjectElements };
