var express = require("express");
var app = express();
var http = require("http").createServer(app) // express seja rodado com base no serv nativo do node
var io = require("socket.io")(http);

//ACIMA, CRIAÇÃO DO SERVER DO SOCKET.IO

io.on("connection", (socket) => {

    socket.on("disconnect", () => [
        console.log(" x desconectou" + socket.id)
    ])

    socket.on("boasvindas", (data) => {
        console.log(data)
    })
    socket.on("palavra", (palavra) => {
        console.log(palavra)
        socket.emit("resultado", palavra + " - Matheus")
    })

})

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index")
})

http.listen(3000, () => {
    console.log("Server Rodando")

})