const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("addTodo-btn");
const todoList = document.getElementById("todo-list");



addTodoBtn.addEventListener("click", () => {
  let currentTodo = todoInput.value;
  console.log(currentTodo);

  const li = document.createElement("li");
  li.textContent = currentTodo;

  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.style.padding = "5px 10px";
  delBtn.style.marginLeft = "8px";
  li.appendChild(delBtn);
  todoList.appendChild(li);
  todoInput.value = "";
  delBtn.addEventListener("click", () => {
    todoList.removeChild(li);
  });
});
