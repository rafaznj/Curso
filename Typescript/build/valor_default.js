"use strict";
/*

function cadastro(email: string, senha: string, nome?: string){ // deixa o valor da variavel opcional ou por padrao, posso passar string ou nada, assim ta opcional
    let data = {email, senha, nome};

    console.log(data);
}

cadastro("teste@gmail.com","12345","Rafael"); // nao passaria um number por exemp

*/
function cadastro(email, senha, nome = "Aluno", idade) {
    let data = { email, senha, nome, idade };
    console.log(data);
}
cadastro("teste@gmail.com", "12345");
