const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const connection = require("./database/database")
const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");
const usersController = require("./user/UserController");
const session = require("express-session")

const Article = require("./articles/Article")
const Category = require("./categories/Category")
const User = require("./user/User")

app.set('view engine', 'ejs');

//Redis => banco de dados focado em salvamento de sessoes e cache

app.use(session({
    secret: "qualquercoisa",
    cookie: { maxAge: 30000 }
}))

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
app.use("/", usersController)

app.get("/", (req, res) => {
    Article.findAll({
        order: [
            ["id", "desc"]
        ],
        limit: 4
    }).then(articles => {
        Category.findAll().then(categories => {
            res.render("index", {
                articles: articles,
                categories: categories
            })
        })

    })
})

app.get("/:slug", (req, res) => {
    var slug = req.params.slug
    Article.findOne({
        where: {
            slug: slug
        }
    }).then(article => {
        if (article != undefined) {
            Category.findAll().then(categories => {
                res.render("article", {
                    article: article,
                    categories: categories
                })
            })
        } else {
            res.redirect("/")
        }
    }).catch(erro => {
        res.redirect("/")
    })
})

app.get("/category/:slug", (req, res) => {
    var slug = req.params.slug
    Category.findOne({
        where: {
            slug: slug
        },
        include: [{ model: Article }]
    }).then(category => {
        if (category != undefined) {
            Category.findAll().then(categories => {
                res.render("index", { articles: category.articles, categories: categories })
            })
        } else {
            res.redirect("/")
        }
    }).catch(err => {
        res.redirect("/")
    })
})

app.listen(3000, () => {
    console.log("Server Running!")
})