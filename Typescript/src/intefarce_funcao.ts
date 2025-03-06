interface CursoProps {
    id: string,
    nome: string,
    preco: number;
    promocao: (preco: number) => void; // Definiu promocao como uma função, o console é: { id: '1' nome: 'React', preco: 12, promocao: [Function: mostraPromocao] } O preço do produto é R$350,00
}

function mostraPromocao(preco: number) {
    console.log(`O preço do produto é R$${preco},00`);
}

const NovoCurso: CursoProps = {
    id: "1",
    nome: "React",
    preco: 12,
    promocao: mostraPromocao
    // pode criar internamente promocao: (preco:number): void => {clg}
}

console.log(NovoCurso);
console.log(NovoCurso.promocao(350));