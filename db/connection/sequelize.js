const {Sequlize} = require('sequelize');

const sequelize = new Sequlize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

module.exports = sequelize;