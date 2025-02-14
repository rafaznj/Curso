let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");

let tarefas = [];

function mostrarTarefa(){
    listElement.innerHTML = "";

    tarefas.map((todo)=>{
        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(todo);
        
        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");

        let linkText = document.createTextNode("Excluir tarefa");
        linkElement.appendChild(linkText);
        
        let posicao = tarefas.indexOf(todo);


        linkElement.setAttribute("onclick", `excluirTarefaEspecifica(${posicao})`)

        liElement.appendChild(tarefaText);
        liElement.appendChild(linkElement);
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

function excluirTarefaEspecifica(posicao){
    tarefas.splice(posicao,1)
    mostrarTarefa();
}