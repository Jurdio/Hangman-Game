const {DataTypes} = require('sequelize');
const sequelize = require('../connection/sequelize');
 const User = sequelize.define('User', {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    count_of_game: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    count_of_win: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
});
