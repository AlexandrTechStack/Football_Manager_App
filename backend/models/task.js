const { DataTypes } = require('sequelize');
const sequelize = require('./index')


const Task = sequelize.define('Task', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    startAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    endAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    feedback: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    mark: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    schema: 'football_schema',
    timestamps: false
});

module.exports = Task