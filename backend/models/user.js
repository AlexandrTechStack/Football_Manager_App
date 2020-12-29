const { DataTypes } = require('sequelize');
const sequelize = require('./index')

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING(30)
    },
    firstName: {
        type: DataTypes.STRING(15)
    },
    lastName: {
        type: DataTypes.STRING(20)
    },
    birthDate: {
        type: DataTypes.DATEONLY
    },
    address: {
        type: DataTypes.STRING(50)
    },
    photoURL: {
        type: DataTypes.STRING(100)
    },
    phone: {
        type: DataTypes.STRING(20)
    },
    isApproved: {
        type: DataTypes.BOOLEAN
    },
    isPrime: {
        type: DataTypes.BOOLEAN
    },
    salary: {
        type: DataTypes.INTEGER
    },
    currentRole: {
        type: DataTypes.ENUM('admin','player', 'coach')
    }
}, {
    sequelize,
    schema: 'football_schema',
    timestamps: false
});

module.exports = User