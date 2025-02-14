var area = document.getElementById('area')

function entrar(){
  var nome = prompt("Digite seu nome");
  
  if(nome === '' || nome === null){
    alert("Ops algo deu errado")
    area.innerHTML = "Clique no botao para acessar..."
  }else{
    area.innerHTML = "Bem vindo " + nome + " ";

    let botaoSair = document.createElement("button");
    botaoSair.innerText = "Sair da conta";
    
    //botaoSair.onclick = sair; -- perguntar a diferença pra enzo
    
    botaoSair.addEventListener("click", sair);
    
    area.appendChild(botaoSair);

  }
}

function sair(){
  alert("Até mais!");
  area.innerHTML = "Você saiu!";
}


function mediaAluno(nota1, nota2){
  //let nota1;
  //let nota2; nao precisa declarar a variavel quando se entrar por parametro

  let media = (nota1 + nota2) / 2;
  
  if (media >= 6){
    console.log(`Aluno foi aprovado, passou com ${media}`); // usar a crase pra indentação
  }
  
  else if (media <= 6){
    console.log(`Aluno foi reprovado, perdeu com ${media}`);
  }

}


function Aluno(nome, curso){
  let mensagem = (`Seja bem vindo ${nome} ao curso ${curso}`);

  console.log(mensagem); 
}