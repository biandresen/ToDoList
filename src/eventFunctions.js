import { constructedLiList } from "./index.js";
import renderListItemListsToUI from "./renderLiItemsListToUI.js";

function toggleTaskInfo(divTaskInfoArea) {
  divTaskInfoArea.classList.toggle("hide");
}

function deleteTask(event) {
  const respectiveListItem =
    event.target.parentNode.parentNode.parentNode.parentNode.parentNode;
  const respectiveListItemId = respectiveListItem.getAttribute("id");
  const indexMatchingTheId = constructedLiList.findIndex(
    (item) => item.id === respectiveListItemId
  );

  constructedLiList.splice(indexMatchingTheId, 1);
  renderListItemListsToUI();
}

export { toggleTaskInfo, deleteTask };
