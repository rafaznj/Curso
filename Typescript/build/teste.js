"use strict";
// let testes = ["Roberto", 205, "A", 1, true]
// let teste;
// teste = true;
// console.log(typeof teste);
const user = {
    nome: "Enzo",
    id: 12,
    isADM: false
};
const userADM = {
    nome: "Rafael",
    id: 2,
    isADM: true
};
function Cadastro(dados) {
    console.log(dados);
}
Cadastro({ nome: "Eu", id: 12, isADM: true });
