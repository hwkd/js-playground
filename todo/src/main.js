import "./style.css";
import { getNode } from "./util.js";
import { newTodoList } from "./todolist.js";

const input = getNode("input");
const header = getNode("header");
const todolist = getNode("list");
const focusGroup = [input, header, todolist];

const tl = newTodoList(
  ["Plan for the week", "Write a draft for blog post", "Meal prep"],
  {todolist},
);

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
  tl.addTodo(input.value);
  input.value = "";
});

input.focus();
