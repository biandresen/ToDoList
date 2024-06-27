import { constructedLiList } from "./index.js";

function renderListItemListsToUI() {
  const taskUnorderedList = document.querySelector("[data-task-list]");
  taskUnorderedList.innerHTML = "";
  taskUnorderedList.append(...constructedLiList);
}

export default renderListItemListsToUI;
