// type alias conseguimos criar tipos mais especificos e fortes doq tipos primitivos

type Info = {
    id: number,
    nome: string,
    descricao?: string
}

const produto: Info = {
    id: 123,
    nome: "Carro"
    // como descricao é opcional, pode ou n declara e definir um valor
}

type Categoria = {
    slug: string,
    quantProduto: number;
}

const categoria1 : Categoria = {
    slug: "Hardware",
    quantProduto: 2
}

//console.log(categoria1);

type produtoInfo = Info & Categoria;

const novoProduto: produtoInfo = {
    id: 1234,
    nome: "Carlos",
    slug: "N sei",
    quantProduto: 3
}

console.log(novoProduto);