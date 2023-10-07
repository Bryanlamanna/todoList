
//CONSTANTE PARA DEFINIR O NOME DA KEY NO INTERNAL STORAGE

const localStorageKey1 = 'to-do-list';
const localStorageKey2 = 'done-list';



// METODOS QUE DEVEM INCIAR AO CARREGAR OU RECARREGAR A PAGINA 

window.load = function showTask() {
    let values = JSON.parse(localStorage.getItem(localStorageKey1) || "[]");
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
            list.innerHTML += `<li class="task">${values[i]['name']}<button onclick="doTask('${values[i]['name']}')" class="okBt">✔</button></li>`;
        }
        
    }
    limpaCampo();
}

window.onload = function showDoneTask() {
    let values = JSON.parse(localStorage.getItem(localStorageKey2) || "[]");
    let list = document.getElementById("donelist");
    
        list.style.display = 'block'; 
        list.innerHTML = '';
       
        for (var i = 0; i < values.length; i++) {
            list.innerHTML += `<li class="task">${values[i]['name']}</li>`;
        }
        
}

// METODO PARA ADICIONAR UMA NOVA TASK NA INTERNAL STORAGE

function newTask() {
    var campoTask = document.getElementById("newTaskInput");
    var task = campoTask.value;

    if (!task){
        alert('insira a descrição da tarefa!')
    } else {
        let values = JSON.parse(localStorage.getItem(localStorageKey1) || "[]");
        values.push({
            name: campoTask.value
        });
        localStorage.setItem(localStorageKey1, JSON.stringify(values));
    }
    showTask();
    limpaCampo();
}

//METODO PARA MONTAR PAINEL COM LISTA DE TASKS DA INTERNAL STORAGE

function showTask() {
    let values = JSON.parse(localStorage.getItem(localStorageKey1) || "[]");
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
            list.innerHTML += `<li class="task">${values[i]['name']}<button onclick="doTask('${values[i]['name']}')" class="okBt">✔</button></li>`;
        }
        
    }
    limpaCampo();
}


//METODO PARA REMOVER UMA TASK DO INTERNAL STORAGE

function doTask(data) {

    let values = JSON.parse(localStorage.getItem(localStorageKey1) || "[]");
    let index = values.findIndex(x => x.name == data);
    if (index !== -1) {
        values.splice(index, 1);
        localStorage.setItem(localStorageKey1, JSON.stringify(values));
        showTask(); // Chame showTask() somente após a remoção bem-sucedida
        newDoneTask(data);
    }
}

//METODO PARA MOSTRAR AS TASKS CONCLUIDAS

function showDoneTask() {
    let values = JSON.parse(localStorage.getItem(localStorageKey2) || "[]");
    let list = document.getElementById("donelist");
     
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
            list.innerHTML += `<li class="task">${values[i]['name']}</li>`;
        }
    } 
    }
    
//METODO PARA TRANSFERIR UMA TASK PARA LISTA DE CONCLUIDAS

function newDoneTask(data) {
        let values = JSON.parse(localStorage.getItem(localStorageKey2) || "[]");
        values.push({
            name: data
        });
        localStorage.setItem(localStorageKey2, JSON.stringify(values));
    
    showDoneTask();
    limpaCampo();
}

//METODO PARA LIMPAR AS TASKS DO INTERNAL STORAGE

function clearTasks() {
    localStorage.removeItem(localStorageKey1);

    localStorage.removeItem(localStorageKey2);
// Chama showTask() para ocultar a lista
showTask();
showDoneTask();

}

//METODO PARA LIMPAR O CAMPO INPUT APÓS REGISTRAR TASKS

function limpaCampo() {
    document.getElementById("newTaskInput").value = '';
}
