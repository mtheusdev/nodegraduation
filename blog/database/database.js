const Sequelize = require("sequelize");

const connection = new Sequelize("blogsculptor", 'sculptorblog', 'math1122', {
    host: 'mysql742.umbler.com',
    dialect: 'mysql',
    timezone: "-03:00"
})

module.exports = connection;