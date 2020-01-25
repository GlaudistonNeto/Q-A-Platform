const Sequelize = require("sequelize");

const connection = new Sequelize('gson-press', 'gson', 'spk32Dev', {
    host: 'mysql669.umbler.com',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = connection;