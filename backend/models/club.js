const { DataTypes } = require('sequelize');
const sequelize = require('./index')


const Club = sequelize.define('Club', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(15)
    },
    address: {
        type: DataTypes.STRING(50)
    },
    photoURL: {
        type: DataTypes.STRING(30)
    }
}, {
    schema: 'football_schema',
    timestamps: false
});
;

module.exports = Club