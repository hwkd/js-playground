import "./style.css";
import { square, checkmark } from "./svg.js";

export function newTodoList(list, nodes) {
  const { todolist } = nodes;

  function _createListItemNode() {
    const li = document.createElement("li");
    li.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "py-2.5",
      "px-5",
      "bg-gray-50",
      "transition",
      "duration-200",
      "animate-[fadeup.25s_ease-out]",
    );
    li.addEventListener("mouseover", function (event) {
      li.classList.add("text-gray-600");
    });
    li.addEventListener("mouseout", function (event) {
      li.classList.remove("text-gray-600");
    });
    return li;
  }

  function _createSpanNode(text) {
    const span = document.createElement("span");
    span.innerText = text;
    return span;
  }

  function _createButtonNode() {
    const button = document.createElement("button");
    button.classList.add("cursor-pointer");
    button.innerHTML = square;
    return button;
  }

  function addTodo(text) {
    const li = _createListItemNode();
    const span = _createSpanNode(text);
    const button = _createButtonNode();

    function onBtnClick (event) {
      if (this.dataset.checked === "true") {
        this.dataset.checked = "false";
        this.innerHTML = square;
      } else {
        this.dataset.checked = "true";
        this.innerHTML = checkmark;
      }
    }
    button.addEventListener("click", onBtnClick);

    li.appendChild(span);
    li.appendChild(button);
    todolist.appendChild(li);
  }

  if (list && list.length) {
    list.forEach(addTodo);
  }

  return {
    addTodo,
  };
}
