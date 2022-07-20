const { Sequelize } = require( 'sequelize' )
const dotenv = require('sequelize')

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'Daniel0119',
    database: 'marketplace',
    logging: false
})

module.exports = { db }

