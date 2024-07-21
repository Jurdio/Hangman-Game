const Sequlize = require('sequelize');
const sequelize = require('../connection/sequelize');

const db = {};

db.Sequlize = Sequlize;
db.sequelize = sequelize;

db.User = require('./user');
db.Game = require('./game');

db.User.hasMany(db.Game, {
    foreignKey: 'user_id',
    as: 'games'
});

db.Game.belongsTo(db.User, {
    foreignKey: 'user_id',
    as: 'user'
});

module.exports = db;