let todo = "";
const ulTag = document.querySelector("ul");

document.querySelector('#todo').addEventListener("submit", function(event) {
    event.preventDefault();
    todo = document.querySelector("#todoField").value;
    let template = todo.map(item => `
    <li>${todo}</li>`);
    ulTag.innerHTML = template.join();
})