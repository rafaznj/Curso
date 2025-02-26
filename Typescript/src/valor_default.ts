/*

function cadastro(email: string, senha: string, nome?: string){ // deixa o valor da variavel opcional ou por padrao, posso passar string ou nada, assim ta opcional
    let data = {email, senha, nome};

    console.log(data);
}

cadastro("teste@gmail.com","12345","Rafael"); // nao passaria um number por exemp

*/

function cadastro(email: string, senha: string, nome = "Aluno", idade?: number){ // assim tá passando por padrão
    let data = {email, senha, nome, idade};

    console.log(data);
}

cadastro("teste@gmail.com","12345");


