const { DataTypes } = require('sequelize');
const sequelize = require('./index')

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        //allowNull: false
    },
    email: {
        type: DataTypes.STRING(30),
        //allowNull: false
    },
    firstName: {
        type: DataTypes.STRING(15),
        //allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(20),
        //allowNull: false
    },
    birthDate: {
        type: DataTypes.DATE,
        //allowNull: false
    },
    address: {
        type: DataTypes.STRING(50),
        //allowNull: false
    },
    photoURL: {
        type: DataTypes.STRING(100),
        //allowNull: false
    },
    phone: {
        type: DataTypes.STRING(20),
        //allowNull: false
    },
    isApproved: {
        type: DataTypes.BOOLEAN,
        //allowNull: false
    },
    isPrime: {
        type: DataTypes.BOOLEAN,
        //allowNull: false
    },
    salary: {
        type: DataTypes.INTEGER,
        //allowNull: false
    },
    currentRole: {
        type: DataTypes.ENUM('admin','player', 'coach'),
        //allowNull: false
    }
}, {
    sequelize,
    schema: 'football_schema',
    timestamps: false
});

module.exports = User