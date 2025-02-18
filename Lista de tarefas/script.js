let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];

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
    mostrarTarefa();
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
        salvarItens();
    }
     
}

function removerTarefa(){
    tarefas.pop(tarefas);
    mostrarTarefa();
    salvarItens();
}

function excluirTarefaEspecifica(posicao){
    tarefas.splice(posicao,1)
    mostrarTarefa();
}

function salvarItens(){
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas) )

}