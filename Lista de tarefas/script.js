let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");

let tarefas = [];

function mostrarTarefa(){
    listElement.innerHTML = "";

    tarefas.map((todo)=>{
        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(todo);

        liElement.appendChild(tarefaText);
        listElement.appendChild(liElement);


    })
}

function adicionarTarefa(){
    if(inputElement.value === ""){
        alert("Digiter uma tarefa");
        return false;
    }
    else{
        let novaTarefa = inputElement.value;
        tarefas.push(novaTarefa);
        inputElement.value = "";
        mostrarTarefa();
    }
     
}

function removerTarefa(){
    tarefas.pop(tarefas);
    mostrarTarefa();
}

