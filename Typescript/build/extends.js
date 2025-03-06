"use strict";
// extender uma interface pra outra interface
const left4dead = {
    id: "1",
    nome: "Left4Dead",
    descricao: "Jogo de sobrevivência",
    plataforma: ["PC", "PS5"]
}; // console.log(left4dead);
const left4dead2 = {
    id: "2",
    nome: "Left4Dead2",
    descricao: "Novos mapas e personagens",
    plataforma: ["PC", "PS5"],
    faseNova: ["Cemiterio", "Inferno"],
    personagemNovo: ["Klaus", "Rob"],
    jogoOriginal: left4dead
};
console.log(left4dead2);
