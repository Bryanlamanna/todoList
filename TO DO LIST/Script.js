const localStorageKey = 'to-do-list';

function newTask() {
    var campoTask = document.getElementById("newTaskInput");
    var task = campoTask.value;

    if (!task){
        alert('insira a descrição da tarefa!')
    } else {
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
        values.push({
            name: campoTask.value
        });
        localStorage.setItem(localStorageKey, JSON.stringify(values));
    }
    showTask();
    limpaCampo();
}

function limpaCampo() {
    document.getElementById("newTaskInput").value = '';
}

function showTask() {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let list = document.getElementById("todolist")
    list.innerHTML = '';

    for (var i = 0 ; i < values.length; i++) {
        list.innerHTML += `<li class="tasK">${values[i]['name']}<button class="okBt">ok</button></li>`;
    }
}