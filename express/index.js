const express = require("express"); // importando express
const app = express(); // iniciando express em app


app.get('/', function(req, res) {
    res.send("Bem vindo ao meu site top das galaxia");
})

app.get('/blog', function(req, res) {
    res.send("Bem vindo ao meu blog");
})

app.get('/canal/youtube', function(req, res) {
    res.send("<h1>Bem vindo ao meu canal!</h1>");
})



app.listen(4000, function(erro) {
    if (erro) {
        console.log("Ocorreu um erro");
    } else {
        console.log("Servidor iniciado com sucesso!");
    }
})