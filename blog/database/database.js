const Sequelize = require("sequelize");

const connection = new Sequelize("blog", 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;