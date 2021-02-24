var express = require("express");
var app = express();
var http = require("http").createServer(app) // express seja rodado com base no serv nativo do node
var io = require("socket.io")(http);

//ACIMA, CRIAÇÃO DO SERVER DO SOCKET.IO

io.on("connection", (socket) => {

    socket.on("disconnect", () => {
        console.log(" x desconectou" + socket.id)
    })

    socket.on("msg", (data) => {
        io.emit("showmsg", data) // retornando para todo mundo
            //socket.emit("showmsg", data) emitindo para mim
        console.log(data)
    })

})

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index")
})

http.listen(3000, () => {
    console.log("Server Rodando")

})