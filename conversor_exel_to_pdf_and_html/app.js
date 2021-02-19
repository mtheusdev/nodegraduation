var Reader = require("./Reader")
var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var Writer = require("./Writer");
var PDFWriter = require("./PDFWriter");
var leitor = new Reader()

async function main() {
    var dados = await leitor.Read("./users.csv")
    var dadosProcessados = Processor.Process(dados)
    var usuarios = new Table(dadosProcessados)
    var html = await HtmlParser.Parse(usuarios)
    var escritor = new Writer();

    escritor.Write(Date.now() + '.html', html);
    PDFWriter.WritePDF(Date.now() + '.PDF', html)
}

main()