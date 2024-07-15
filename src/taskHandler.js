import { modal, projectList, taskList } from "./index.js";
import { setupProjectElements } from "./setupProjectElements.js";
import { render } from "./render.js";
import Task from "./Task.js";
import setupTaskElements from "./setupTaskElements.js";
import {
  editFlag,
  editListTaskID,
  renderRespectiveFilterList,
} from "./eventFunctions.js";

const SUBMIT = "submit";
export const taskForm = document.querySelector("[data-new-task-form]");
const taskInput = document.querySelector("[data-new-task-input]");
const noteInput = document.querySelector("[data-new-note-input]");
const projectInput = document.querySelector("[data-new-project-input]");
const dateInput = document.querySelector("[data-new-date-input]");
const colorInput = document.querySelector("[data-new-color-input]");

function handleTaskSubmission(event) {
  if (event.target.getAttribute("type") === SUBMIT && editFlag[0] === "true") {
    const respectiveTask = submitEditedTask(editListTaskID);
    const respectiveTaskProjectName =
      respectiveTask.querySelector(".project-paragraph").textContent;
    pushProjectToList(respectiveTaskProjectName);
    renderRespectiveFilterList();
    render();
    editFlag[0] = "false";
  } else if (event.target.getAttribute("type") === SUBMIT && editFlag[0] == "false") {
    const task = createTask();
    setupTaskElements(task);
    pushProjectToList(task.project);
    renderRespectiveFilterList();
    render();
    modal.close();
  } else {
    modal.close();
  }
  taskForm.reset();
}

function createTask() {
  const priorityInput = document
    .querySelector('input[name="priority"]:checked')
    .getAttribute("data-value");
  const task = new Task(
    taskInput.value,
    noteInput.value,
    projectInput.value,
    dateInput.value,
    priorityInput,
    colorInput.value
  );
  return task;
}

function pushProjectToList(project) {
  const projectExists = projectList.some((item) => item.getAttribute("name") == project);
  if (projectExists) return;
  setupProjectElements(project);
}

function submitEditedTask(taskID) {
  const respectiveTask = taskList.find((task) => task.getAttribute("id") == taskID);

  const priorityColorField =
    respectiveTask.getElementsByClassName("task-priority-color")[0];
  const taskTitle = respectiveTask.getElementsByClassName("task-text")[0];
  const taskNote = respectiveTask.getElementsByClassName("note-paragraph")[0];
  const taskProjectName = respectiveTask.getElementsByClassName("project-paragraph")[0];
  const taskDate = respectiveTask.getElementsByClassName("due-date-paragraph")[0];
  const taskColor = respectiveTask.getElementsByClassName("color-info-icon")[0];
  const taskPriorityLow = respectiveTask.getElementsByClassName("low-priority-box")[0];
  const taskPriorityMed = respectiveTask.getElementsByClassName("med-priority-box")[0];
  const taskPriorityHigh = respectiveTask.getElementsByClassName("high-priority-box")[0];
  const taskBoxUnchecked =
    respectiveTask.getElementsByClassName("check-box-unchecked")[0];
  const taskBoxChecked = respectiveTask.getElementsByClassName("check-box-checked")[0];

  const formTaskTitle = taskForm[0].value;
  const formTaskNote = taskForm[1].value;
  const formTaskProjectName = taskForm[2].value;
  const formTaskDate = taskForm[3].value;
  const formTaskColor = taskForm[4].value;
  const formTaskPriorityLow = taskForm[5];
  const formTaskPriorityMed = taskForm[6];
  // const formTaskPriorityHigh = taskForm[7];
  const priorityAlternatives = [taskPriorityLow, taskPriorityMed, taskPriorityHigh];

  taskTitle.textContent = formTaskTitle;
  taskNote.textContent = formTaskNote;
  taskProjectName.textContent = formTaskProjectName;
  taskDate.textContent = formTaskDate;
  taskColor.style.color = formTaskColor;
  taskBoxUnchecked.style.color = formTaskColor;
  taskBoxChecked.style.color = formTaskColor;

  priorityAlternatives.forEach((alternative) => {
    if (alternative.classList.contains("priority-border")) {
      alternative.classList.remove("priority-border");
    }
  });

  if (formTaskPriorityLow.checked == true) {
    taskPriorityLow.classList.add("priority-border");
    resetPriorityColor(priorityColorField);
    priorityColorField.classList.add("low");
  } else if (formTaskPriorityMed.checked == true) {
    taskPriorityMed.classList.add("priority-border");
    resetPriorityColor(priorityColorField);
    priorityColorField.classList.add("med");
  } else {
    taskPriorityHigh.classList.add("priority-border");
    resetPriorityColor(priorityColorField);
    priorityColorField.classList.add("high");
  }
  modal.close();
  return respectiveTask;
}

function resetPriorityColor(priorityColorField) {
  priorityColorField.classList.remove("low");
  priorityColorField.classList.remove("med");
  priorityColorField.classList.remove("high");
}

export { handleTaskSubmission };
