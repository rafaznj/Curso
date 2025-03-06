interface Produtos  { 
    readonly id: string, // Só pode ver, apenas leitura e n faz alterações
    nome: string,
    descricao: string;
}

let produto1: Produtos = {
    id: "123",
    nome: "Raafel",
    descricao: "Muitas coidas"
};