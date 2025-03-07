const express = require("express");

//console.log(express);

const server = express();

// paramentos que passam antes da rota
// Query params = ?nome=NodeJS
// Route params = /curso/2
// Request body = { nome: "Node JS", tipo: "Backend"}

//localhost: 3000/curso a porta que vc identificou ali em baixo
server.get('/curso/:id', (req, res) => { // req representa os dados da requisição e o res representa as informações pra retornar ao usuario ou front

    const id = req.params.id;

    const nome = req.query.nome;

    //return res.send('Hello');

    return res.json({curso: `${id}`})
    //return res.json({curso: `${nome}`})
})

server.listen(3000);