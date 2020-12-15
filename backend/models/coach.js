const { DataTypes } = require('sequelize');
const sequelize = require('./index')

const Coach = sequelize.define('Coach', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    qualify: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    biography: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    onPosition: {
        type: DataTypes.DATE,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    isHead: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    schema: 'football_schema',
    timestamps: false
});

module.exports = Coach