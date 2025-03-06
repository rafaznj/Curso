"use strict";
function mostraPromocao(preco) {
    console.log(`O preço do produto é R$${preco},00`);
}
const NovoCurso = {
    id: "1",
    nome: "React",
    preco: 12,
    promocao: mostraPromocao
    // pode criar internamente promocao: (preco:number): void => {clg}
};
console.log(NovoCurso);
console.log(NovoCurso.promocao(350));
