const {DataTypes} = require('sequelize');
const sequelize = require('../connection/sequelize');

const Game = sequelize.define('Game', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    word: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    is_winner:{
        type: DataTypes.BOOLEAN,
    }
});

module.exports = Game;