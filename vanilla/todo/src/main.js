import "./style.css";
import { getNode } from "./util.js";
import { square, checkmark, trash } from "./svg.js";

const input = getNode("input");
const header = getNode("header");
const todoList = getNode("list");
const completedList = getNode("completed");
const focusGroup = [input, header, todoList];

const initialItems = [
  "Plan for the week",
  "Write a draft for blog post",
  "Meal prep",
];

for (let item of initialItems) {
  addTodo(item);
}

function addTodo(text) {
  const li = _createListItemNode();
  const span = _createSpanNode(text);
  const div = _createDivNode();
  const deleteButton = _createDeleteButton({
    onClick: function (event) {
      li.remove();
    }
  })
  const doneButton = _createDoneButton({
    onClick: function (event) {
      if (li.dataset.completed === "true") {
        li.classList.remove("text-gray-600");
        li.dataset.completed = "false";
      } else {
        li.classList.remove("text-gray-600");
        li.dataset.completed = "true";
      }
    }
  });

  const observer = new MutationObserver(function (mutations) {
    for (const mut of mutations) {
      if (mut.type === "attributes" && mut.attributeName === "data-completed") {
        if (mut.target.dataset.completed === "true") {
          todoList.removeChild(mut.target);
          completedList.appendChild(mut.target);
        } else {
          completedList.removeChild(mut.target);
          todoList.appendChild(mut.target);
        }
      }
    }
  });
  observer.observe(li, { attributes: true, attributeFilter: ["data-completed"] });

  div.appendChild(deleteButton);
  div.appendChild(doneButton);
  li.appendChild(span);
  li.appendChild(div);
  todoList.appendChild(li);
}

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

function _createDivNode() {
  const div = document.createElement("div");
  div.classList.add("flex", "space-x-2");
  return div;
}

function _createDoneButton({ onClick }) {
  const button = document.createElement("button");
  button.classList.add("cursor-pointer");
  button.innerHTML = square;
  button.addEventListener("click", function (event) {
    if (this.innerHTML === checkmark) {
      this.innerHTML = square;
    } else {
      this.innerHTML = checkmark;
    }
    onClick?.(event);
  });
  return button;
}

function _createDeleteButton({ onClick }) {
  const button = document.createElement("button");
  button.classList.add("cursor-pointer");
  button.innerHTML = trash;
  button.addEventListener("click", function (event) {
    onClick?.(event);
  });
  return button;
}

input.addEventListener("focusin", function (event) {
  for (const node of focusGroup) {
    node.classList.add("focused");
  }
});
input.addEventListener("focusout", function (event) {
  for (const node of focusGroup) {
    node.classList.remove("focused");
  }
});

getNode("form").addEventListener("submit", function (event) {
  event.preventDefault();
  addTodo(input.value);
  input.value = "";
});

input.focus();
