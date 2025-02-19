let listafilmes = []

let listagem = document.getElementById("listagem");
let filmes = document.getElementById("filmes");
let quant = 0;
let filmesiguais = [];

let listaFilmesInterface = document.getElementById("ulFilmes")

function adicionarFilme() {
    let filme = {
        nome: "", ano: "", diretor: ""
    };

    filme.nome = prompt("Nome do filme:")
    filme.ano = prompt("Ano do filme:")
    filme.diretor = prompt("Diretor do filme:")
    listafilmes.push(filme);
}

function pesquisarFilme() {
    let pesquisa = prompt("");

    for (i = 0; i < listafilmes.length; i++) {
        if (listafilmes[i].nome == pesquisa) {
            quant++
            filmesiguais.push(listafilmes[i])
        }
    } 

    listagem.innerText = `Foram encontrados (${quant}) filmes`
    
    for (i = 0; i < filmesiguais.length; i++) {
        let liFilme = document.createElement("li")
        liFilme.innerHTML = `Nome: ${filmesiguais[i].nome}<br> Diretor: ${filmesiguais[i].diretor}<br> Ano: ${filmesiguais[i].ano}`
        listaFilmesInterface.appendChild(liFilme)
        }
    }