// let testes = ["Roberto", 205, "A", 1, true]
// let teste;
// teste = true;
// console.log(typeof teste);


// boolean, tudo que for diferente de zero, string vazia, indefinido será verdadeiro


interface Name { // interface é como se fosse um modelo ou base pra um elemento
    nome: string,
    id: number,
    isADM: boolean
}

const user: Name = {
    nome: "Enzo",
    id:12,
    isADM: false
}

const userADM: Name = {
    nome: "Rafael",
    id:2,
    isADM: true
}

function Cadastro(dados: Name){
    console.log(dados);
}

Cadastro({nome: "Eu", id: 12, isADM: true});