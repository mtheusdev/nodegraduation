const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const connection = require("./database/database")
const Pergunta = require("./database/Pergunta")

//DATABASE
connection.authenticate().then(() => {
    console.log("Conexão feita com o banco de dados")
}).catch((err) => {
    console.log(err)
})

app.set('view engine', 'ejs') // Definindo o ejs como motor (renderizador) de html do express 
    // html's devem ser salvos na pasta view (padrão express)
app.use(express.static('public')); // para usar arquivos estaticos

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) // ler dados via json


app.get('/', (req, res) => {
    Pergunta.findAll({ raw: true }).then(perguntas => { // raw: true, trazer so as infos da tabela
        res.render("index", {
            perguntas: perguntas
        });
    })

});

app.get('/perguntar', (req, res) => {
    res.render("perguntar");
});

app.post('/salvarpergunta', (req, res) => {
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/") // redirecionando o usuário para a pag inicial depois de inserir no banco caso sucesso
    })
});

app.listen(3000, () => {
    console.log("Servidor rodando!");
});