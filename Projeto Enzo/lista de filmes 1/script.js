let filmes = [""];
let listagem = document.getElementById("listagem");

function adicionarFilme(){
    let filme = prompt("")
    filmes.push(filme) ;
}

function pesquisarFilme(){
    let pesquisa = prompt("");
    if (filmes.includes(pesquisa) == true){
        listagem.innerHTML = `O filme ${pesquisa} foi encontrado na lista. <br>`
    }
    else {
         listagem.innerHTML = `O filme ${pesquisa} não foi encontrado na lista. <br>`
    }
}