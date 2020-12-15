const { DataTypes } = require('sequelize');
const sequelize = require('./index')


const Club = sequelize.define('Club', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    photoURL: {
        type: DataTypes.STRING(30),
        allowNull: false
    }
}, {
    schema: 'football_schema',
    timestamps: false
});
;

module.exports = Club