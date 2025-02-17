let pessoa = { nome: "", sobrenome: "", idade: "" };

let nome = document.getElementById("nome")
let sobrenome = document.getElementById("sobrenome")
let idade = document.getElementById("idade")

function adicionarNome() {
    pessoa.nome = prompt("Digite o nome");

    nome.innerHTML = `Nome : ${pessoa.nome} <br>`
}

function adicionarSobrenome() {
    pessoa.sobrenome = prompt("Digite o sobrenome");
    sobrenome.innerHTML = `Sobrenome:${pessoa.sobrenome} <br>`
}

function adicionarIdade() {
    pessoa.idade = prompt("Digite a idade");
    idade.innerHTML = `Idade: ${pessoa.idade} </br>`
}

