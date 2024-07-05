//IMPORTS
import createElement from "./createElement.js";
import { constructedTaskLiList } from "./index.js";
import { toggleTaskInfo, deleteTask } from "./eventFunctions.js";

//DECLARATIONS
const LOW = "LOW";
const MED = "MED";
const HIGH = "HIGH";
/////////////////////////////////////////////////////////////////////

function setupTaskElements(taskList) {
  let newestTask = taskList.length - 1;

  //CREATE ELEMENTS
  const taskListItem = createElement("li", "task-list-item");
  taskListItem.setAttribute("id", newestTask);
  const divTaskHeader = createElement("div", "task-header");
  const divTaskField = createElement("div", "task-field");
  const iconUnchecked = createElement("i", "fa-solid");
  iconUnchecked.classList.add("fa-circle");
  iconUnchecked.classList.add("check-box-unchecked");
  const iconChecked = createElement("i", "fa-solid");
  iconChecked.classList.add("fa-circle-check");
  iconChecked.classList.add("check-box-checked");
  const taskText = createElement("h2", "task-text");
  const divBoxButtons = createElement("div", "task-box-buttons");
  const taskExpandButton = createElement("button", "task-expand-button");
  taskExpandButton.classList.add("expand-button");
  const taskExpandIcon = createElement("i", "fa-solid");
  taskExpandIcon.classList.add("fa-caret-down");
  taskExpandIcon.classList.add("task-expand-icon");
  const divEdit = createElement("div", "edit");
  const editButton = createElement("button", "edit-button");
  editButton.classList.add("expand-button");
  editButton.setAttribute("data-edit-flag", "false");
  const editExpandIcon = createElement("i", "fa-solid");
  editExpandIcon.classList.add("fa-pen-to-square");
  editExpandIcon.classList.add("edit-expand-icon");
  const divDelete = createElement("div", "delete");
  const deleteButton = createElement("button", "delete-button");
  deleteButton.classList.add("expand-button");
  const deleteExpandIcon = createElement("i", "fa-solid");
  deleteExpandIcon.classList.add("fa-trash");
  deleteExpandIcon.classList.add("delete-expand-icon");
  const divTaskInfoArea = createElement("div", "task-info-area");
  const divNoteArea = createElement("div", "task-note-area");
  const noteHeader = createElement("h2", "note-header");
  const noteParagraph = createElement("p", "note-paragraph");
  const divTaskExtraInfo = createElement("div", "task-extra-info");
  const divProjectInfo = createElement("div", "project-info");
  const projectHeader = createElement("h3", "project-header");
  const projectParagraph = createElement("p", "project-paragraph");
  const divDueDateInfo = createElement("div", "due-date-info");
  const dueDateHeader = createElement("h3", "due-date-header");
  const dueDateParagraph = createElement("p", "due-date-paragraph");
  const divPriorityInfo = createElement("div", "priority-info");
  const priorityHeader = createElement("h3", "priority-header");
  const divPriorityBoxes = createElement("div", "priority-boxes");
  const boxLowPriority = createElement("div", "low-priority-box");
  boxLowPriority.classList.add("priority-box");
  const boxMedPriority = createElement("div", "med-priority-box");
  boxMedPriority.classList.add("priority-box");
  const boxHighPriority = createElement("div", "high-priority-box");
  boxHighPriority.classList.add("priority-box");
  const divColorInfo = createElement("div", "color-info");
  const colorInfoHeader = createElement("h3", "color-info-header");
  const colorInfoIcon = createElement("i", "color-info-icon");
  colorInfoIcon.classList.add("fa-solid");
  colorInfoIcon.classList.add("fa-circle");

  //GIVE ELEMENTS VALUES
  taskList[newestTask].title === ""
    ? (taskText.textContent = "Task")
    : (taskText.textContent = taskList[newestTask].title);
  noteHeader.textContent = "Note";
  taskList[newestTask].note === ""
    ? (noteParagraph.textContent = "...")
    : (noteParagraph.textContent = taskList[newestTask].note);
  projectHeader.textContent = "Project: ";
  projectParagraph.textContent = taskList[newestTask].project;
  dueDateHeader.textContent = "Due Date: ";
  dueDateParagraph.textContent = taskList[newestTask].date;
  colorInfoHeader.textContent = "Color: ";
  colorInfoIcon.style.color = taskList[newestTask].color;
  iconUnchecked.style.color = taskList[newestTask].color;
  iconChecked.style.color = taskList[newestTask].color;
  priorityHeader.textContent = "Priority: ";
  boxLowPriority.textContent = LOW;
  boxMedPriority.textContent = MED;
  boxHighPriority.textContent = HIGH;
  if (taskList[newestTask].priority === LOW) {
    boxLowPriority.classList.add("priority-border");
  } else if (taskList[newestTask].priority === MED) {
    boxMedPriority.classList.add("priority-border");
  } else {
    boxHighPriority.classList.add("priority-border");
  }

  //APPEND ELEMENTS
  taskListItem.append(divTaskHeader, divTaskInfoArea);
  divTaskHeader.append(divTaskField, divBoxButtons);
  divTaskField.append(iconUnchecked, iconChecked, taskText);
  divBoxButtons.append(taskExpandButton, divEdit, divDelete);
  taskExpandButton.append(taskExpandIcon);
  divEdit.appendChild(editButton);
  editButton.appendChild(editExpandIcon);
  divDelete.appendChild(deleteButton);
  deleteButton.appendChild(deleteExpandIcon);
  divTaskInfoArea.append(divNoteArea, divTaskExtraInfo);
  divTaskInfoArea.append(noteHeader, noteParagraph);
  divTaskExtraInfo.append(divProjectInfo, divDueDateInfo, divPriorityInfo);
  divNoteArea.append(noteHeader, noteParagraph);
  divProjectInfo.append(projectHeader, projectParagraph);
  divDueDateInfo.append(dueDateHeader, dueDateParagraph);
  divPriorityInfo.append(priorityHeader, divPriorityBoxes, divColorInfo);
  divPriorityBoxes.append(boxLowPriority, boxMedPriority, boxHighPriority);
  divColorInfo.append(colorInfoHeader, colorInfoIcon);

  constructedTaskLiList.push(taskListItem);

  //ADD EVENT LISTENERS
  taskExpandButton.addEventListener("click", () => {
    toggleTaskInfo(divTaskInfoArea, taskExpandIcon);
  });
  deleteButton.addEventListener("click", (event) => {
    deleteTask(event);
  });
}

export default setupTaskElements;
