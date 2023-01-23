let todo_list = document.querySelector(".todo_list");
let todo_input = document.querySelector(".todo_input");
let todo_button = document.querySelector(".todo_button");

todo_button.addEventListener("click", addTodo);
todo_list.addEventListener("click", deleteTodo);

function addTodo(e) {
  e.preventDefault();
  if (todo_input.value ==="") {
    alert("Please enter item");
  } else {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todo_input.value;
    newTodo.classList.add("todo_item");
    todoDiv.appendChild(newTodo);

    const button = document.createElement("button");
    button.innerHTML = '<i class="fas fa-trash"></i>';
    button.classList.add("delete_btn");
    todoDiv.appendChild(button);

    todo_list.appendChild(todoDiv);
    todo_input.value = "";
  }
}

function deleteTodo(e) {
  let item = e.target;
  if (item.className === "delete_btn") {
    let td = item.parentElement;
    td.remove();
  }
}