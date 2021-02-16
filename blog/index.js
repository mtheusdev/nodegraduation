const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const connection = require("./database/database")
const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");
const Article = require("./articles/Article")
const Category = require("./categories/Category")

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

connection.authenticate().then(() => {
    console.log("Connection Success");
}).catch(err => {
    console.log(err)
})
app.use("/", categoriesController) // usando as rotas que estão no controller das categorias
app.use("/", articlesController)



app.get("/", (req, res) => {
    res.render("index");
})

app.listen(8080, () => {
    console.log("Server Running!")
})