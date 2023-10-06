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
    let list = document.getElementById("todolist");

    if (values.length === 0) {
        // Se não houver tarefas, oculta a lista
        list.style.display = 'none';
        let clearBtn = document.getElementById("clearTasks");
        clearBtn.style.display = 'none';
    } else {
        list.style.display = 'block'; // Exibe a lista
        list.innerHTML = '';
        let clearBtn = document.getElementById("clearTasks");
        clearBtn.style.display = 'block';

        for (var i = 0; i < values.length; i++) {
            list.innerHTML += `<li class="task">${values[i]['name']}<button class="okBt">✔</button></li>`;
        }
        
    }
    limpaCampo();
}

function clearTasks() {
    localStorage.removeItem(localStorageKey);

    // Chama showTask() para ocultar a lista
    showTask();
    limpaCampo();
}

window.onload = function showTask() {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let list = document.getElementById("todolist");
    
    if (values.length === 0) {
        // Se não houver tarefas, oculta a lista
        list.style.display = 'none';
        let clearBtn = document.getElementById("clearTasks");
        clearBtn.style.display = 'none';
    } else {
        list.style.display = 'block'; // Exibe a lista
        list.innerHTML = '';

        let clearBtn = document.getElementById("clearTasks");
        clearBtn.style.display = 'block';

        for (var i = 0; i < values.length; i++) {
            list.innerHTML += `<li class="task">${values[i]['name']}<button class="okBt">ok</button></li>`;
        }
        
    }
    limpaCampo();
}

