const fs = require('fs');
const util = require('util');

class Reader {
    constructor() {
        this.reader = util.promisify(fs.readFile) // transformando fs.readfile que era um callback em uma promisse para poder utilizar async await e retornar os dados, pois callback nao retorna dados
    }
    async Read(filepath) {
        try {
            return await this.reader(filepath, "utf-8")
        } catch (err) {
            return undefined
        }
    }
}

module.exports = Reader