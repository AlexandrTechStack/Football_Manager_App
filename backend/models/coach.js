const { DataTypes } = require('sequelize');
const sequelize = require('./index')

const Coach = sequelize.define('Coach', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    qualify: {
        type: DataTypes.STRING(20)
    },
    biography: {
        type: DataTypes.STRING(200)
    },
    onPosition: {
        type: DataTypes.DATE
    },
    type: {
        type: DataTypes.STRING(15)
    },
    isHead: {
        type: DataTypes.BOOLEAN
    }
}, {
    schema: 'football_schema',
    timestamps: false
});

module.exports = Coach