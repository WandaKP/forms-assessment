const todoForm = document.querySelector("#todo");
const todoInput = document.querySelector("#todoField");
const todoList = document.querySelector("ul");
let todoItems = [];

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const todo = todoInput.value;
    if (todoItems.length >= 0) {
        todoItems.push(todo);
    }
    todoInput.value = '';
    renderTodoList();
})

function renderTodoList() {
    const template = todoItems.map(item => `
    <ul>
    <li>${item}
    </li></ul>
    `);
    todoList.innerHTML = template.join('');
}