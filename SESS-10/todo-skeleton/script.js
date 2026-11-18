const btnAdd = document.getElementById("btn_add");
const btnBlock = document.getElementById("btn_block");
const tasks = document.getElementById("tasks");

btnAdd.addEventListener("click", addTask);

function addTask() {
    const liElem = document.createElement("li");
    liElem.innerText = `item ${Math.random()}`;
    tasks.append(liElem);
}

btnBlock.addEventListener("click", function() {
    btnAdd.removeEventListener("click", addTask);
});

