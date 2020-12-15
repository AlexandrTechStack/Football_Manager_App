const { DataTypes } = require('sequelize');
const sequelize = require('./index')


const Login = sequelize.define('Login', {
    provider: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    token: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    login: {
        type: DataTypes.STRING(15),
        //allowNull: false
    },
    password: {
        type: DataTypes.STRING(15),
        //allowNull: false
    }
}, {
    schema: 'football_schema',
    timestamps: false
});

module.exports = Login