let listafilmes = []

let listagem = document.getElementById("listagem");

let pesquisas = document.getElementById("pesquisas")

let listaFilmesInterface = document.getElementById("ulFilmes")

let quant = 0;

let filmesiguais = [];

let historico = [];

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

            // if (pesquisa && !historico[i].includes(pesquisa)) {
            //     historico[i].push(pesquisa);
            // }
        }
    } 

    listagem.innerText = `Foram encontrados (${quant}) filmes`
    
    for (i = 0; i < filmesiguais.length; i++) {
        let liFilme = document.createElement("li")
        liFilme.innerHTML = `Nome: ${filmesiguais[i].nome}<br> Diretor: ${filmesiguais[i].diretor}<br> Ano: ${filmesiguais[i].ano}`
        listaFilmesInterface.appendChild(liFilme)
        }
    }

    // function historicoBuscas(historico) {
    //     pesquisas.innerHTML = `Histórico de Buscas <br> ${historico}`
    //     for (let i = 0; i < historico.length; i++) {
    //        pesquisas.innerHTML = `${i + 1}. ${historico[i]}<br>`
    //     }
    // }