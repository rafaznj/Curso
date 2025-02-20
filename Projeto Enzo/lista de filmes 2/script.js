// ao pesquisar dnv um filme, ele devolveo o filme anterior pesquisado 

let listafilmes = []
let filmesiguais = [];
let historico = []; // recebe oq foi digitado em pesquisa

let listagem = document.getElementById("listagem");
let listaFilmesInterface = document.getElementById("ulFilmes")
let historicoFilmesInteface = document.getElementById("historicoFilmes") // interface historico de pesquisas

let quant = 0;

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
    
    for(i = 0; i < historico.length; i++){
        historico[i].push(pesquisa)
    }

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


function historicoDePesquisas() { // historico de pesquisas 
    historicoFilmesInteface.innerHTML = `Historico de pesquisas <br>`
    for (i = 0; i < historico.length; i++){
        historicoFilmesInteface.innerHTML = `${historico[i]} <br>`
    }
}