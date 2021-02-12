const express = require("express"); // importando express
const app = express(); // iniciando express em app


app.get('/', function(req, res) {
    res.send("Bem vindo ao meu site top das galaxia");
})

app.get('/blog/:artigo?', function(req, res) {

    var artigo = req.params.artigo;

    if (artigo) {
        res.send("Bem vindo ao meu blog " + artigo);
    } else {
        res.send("Bem vindo ao meu blog");
    }

})

app.get('/canal/youtube', function(req, res) {

    var canal = req.query["canal"];
    if (canal) {
        res.send(canal);
    } else {
        res.send("nenhum canal fornecido")
    }

})


app.get('/ola/:nome/:empresa', function(req, res) {
    var nome = req.params.nome
    var empresa = req.params.empresa
    res.send("<h1>Oi " + nome + " " + "da " + empresa + " </h1>");
})



app.listen(4000, function(erro) {
    if (erro) {
        console.log("Ocorreu um erro");
    } else {
        console.log("Servidor iniciado com sucesso!");
    }
})