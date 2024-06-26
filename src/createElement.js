function createElement(elementType, className, text = "") {
  const element = document.createElement(elementType);
  element.classList.add(className);
  element.textContent = text;
  return element;
}

export default createElement;
