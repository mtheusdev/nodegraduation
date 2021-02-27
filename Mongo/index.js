const mongoose = require("mongoose");
const articleModel = require("./article");

mongoose.connect("mongodb://localhost:27017/sculptormongo", { useNewUrlParser: true, useUnifiedTopology: true })

const Article = mongoose.model("Article", articleModel)
const artigo = new Article({ title: "ASDASD", author: "asdasd" })

artigo.save