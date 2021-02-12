const express = require("express");
const app = express();

app.set('view engine', 'ejs') // Definindo o ejs como motor (renderizador) de html do express 

// html's devem ser salvos na pasta view (padrão express)

app.get('/:nome/:lang', (req, res) => {
    var nome = req.params.nome
    var lang = req.params.lang
    var msg = false
    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "NeonDevSol",
        inscritos: 3000,
        msg: msg
    });
});


app.listen(3000, () => {
    console.log("Servidor rodando!");
});