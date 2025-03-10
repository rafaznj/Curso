const express = require("express");

//console.log(express);

const server = express();

server.use(express.json())

// paramentos que passam antes da rota
// Query params = ?nome=NodeJS
// Route params = /curso/2
// Request body = { nome: "Node JS", tipo: "Backend"}

//localhost: 3000/curso a porta que vc identificou ali em baixo

// CRUD - Create, Read, Uptade e Delete
// post - criar, get - ler, put - atualizar, delete - deletar 

const cursos = ["NodeJS", "PHP", "Java", "TypeScript", "GO"];

server.get("/cursos", (req, res)=>{
    return res.json(cursos);
})

// LENDO CURSO
server.get('/cursos/:index', (req, res) => { // req representa os dados da requisição e o res representa as informações pra retornar ao usuario ou front

    const { index } = req.params;

    //const nome = req.query.nome;

    //return res.send('Hello');

    return res.json(cursos[index])
    //return res.json({curso: `${nome}`})
});

// CRIANDO CURSO
server.post("/cursos", (req, res) => {
    const {name} = req.body;
    cursos.push(name);
    
    return res.json(cursos);
});

// ATUALIZANDO CURSO
server.put("/cursos/:index", (req, res) => {
    const {index} = req.params;
    const {name} = req.body;
    
    cursos[index] = name;

    return res.json(cursos);
});

// DELETANDO CURSO
server.delete("/cursos/:index", (req, res) => {
    const {index} = req.params;
    cursos.splice(index,1);
    
    return res.json(cursos);
});

server.listen(3000);