const Sequelize = require('sequelize')

module.exports =  new Sequelize('node' , 'root' , '' , {
    dialect: 'mysql',
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3307
})















// const mysql = require('mysql2')

// module.exports = mysql.createPool({
//     host: '127.0.0.1',
//     user: 'root',
//     password: '',
//     database: 'node',
//     port: 3307
// }).promise()
