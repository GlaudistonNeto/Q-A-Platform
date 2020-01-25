const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', 'spkdev', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;