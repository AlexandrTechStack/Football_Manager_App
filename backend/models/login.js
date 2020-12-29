const { DataTypes } = require('sequelize');
const sequelize = require('./index')


const Login = sequelize.define('Login', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    provider: {
        type: DataTypes.STRING(15)
    },
    token: {
        type: DataTypes.STRING(30)
    }
}, {
    schema: 'football_schema',
    timestamps: false
});

module.exports = Login