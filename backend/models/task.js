const { DataTypes } = require('sequelize');
const sequelize = require('./index')


const Task = sequelize.define('Task', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    description: {
        type: DataTypes.STRING(15)
    },
    startAt: {
        type: DataTypes.DATE
    },
    endAt: {
        type: DataTypes.DATE
    },
    feedback: {
        type: DataTypes.STRING(50)
    },
    mark: {
        type: DataTypes.INTEGER
    }
}, {
    schema: 'football_schema',
    timestamps: false
});

module.exports = Task