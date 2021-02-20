var database = require('./database');

// INSERT
// var dados = [{
//         nome: 'Call of Duty',
//         preco: 150.50
//     },
//     {
//         nome: "Joguinho",
//         preco: 199.99
//     }

// ]
// database.insert(dados).into("games").then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })

//Select
// database.select(["idgames", "preco"]).table("games").then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })

// NESTED QUERIES
// database.insert({ nome: "Lol", preco: 0.0 }).into("games").then(data => {
//     database.select(["idgames", "preco"]).table("games").then(data => {
//         console.log(data)
//     }).catch(err => {
//         console.log(err)
//     })
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })


//WHERE
// database.whereRaw("preco > 50").table("games").then(date => {
//     console.log(date)
// }).catch(err => {
//     console.log(err)
// })


// QUERIES CRUAS MUITO IMPORTANTE
// database.raw("select * from games").then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })

//DELETE
// database.where({ idgames: 3 }).delete().table("games").then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })

//UPDATE
// database.where({ idgames: 2 }).update({ preco: 50.0 }).table("games").then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })

// ORDER BY
// database.select().table("games").orderBy("nome", "asc").then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })

// insert relacionado
// database.insert({
//     nome: "Riot",
//     game_id: 2
// }).table("estudios").then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })


// join 
// database.select(["estudios.id"]).table("games").innerJoin("estudios", "estudios.game_id", "games.idgames").then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })

// join
// database.select(["games.*", "estudios.nome as estudio_nome"]).table("games").innerJoin("estudios", "estudios.game_id", "games.idgames").then(data => {
//     var game = {
//         id: 0,
//         nome: "",
//         estudios: []
//     }
//     game.id = data[0].id
//     game.nome = data[0].nome
//     console.log(game)

//     data.forEach(estudio => {
//         game.estudios.push({ nome: estudio.estudio_nome })
//     })
//     console.log(game)
// }).catch(err => {
//     console.log(err)
// })

async function testeTransaction() {
    try {
        await database.transaction(async trans => {
            //fazer o que quiser aqui
        })
    } catch (err) {
        console.log(err)
    }

}