const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");
const btn = document.getElementById("btn");
item.addEventListener("keyup", function (event) {
  if (event.key == "Enter" && this.value !== "") {
    let b = this.value.slice();
    addToDo(b);
    this.value = "";
  }
});
btn.addEventListener("click", function (event) {
  if (item.value !== "") {
    let b = item.value.slice();
    addToDo(b);
    item.value = "";
  }
});

const addToDo = (item) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
     🎯 ${item}
        <img src = "xmark-solid.svg" alt = "delete" width=18px;>
    `;
  toDoBox.appendChild(listItem);
  saveto();
};

toDoBox.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI" || e.target.tagName === "P") {
      e.target.classList.toggle("done");
      saveto();
    } else if (e.target.tagName === "IMG") {
      e.target.parentElement.remove();
      saveto();
    }
  },
  false
);

function saveto() {
  localStorage.setItem("data", toDoBox.innerHTML);
}

function showTasks() {
  toDoBox.innerHTML = localStorage.getItem("data");
}
showTasks();
