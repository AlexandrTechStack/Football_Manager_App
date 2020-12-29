const {Sequelize} = require('sequelize');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

//connection
const sequelize = new Sequelize(process.env.URI)
module.exports = sequelize

//models
const User = require('./user')
const Club = require('./club')
const Coach = require('./coach')
const Task = require('./task')
const Login = require('./login')

//associates

Club.hasMany(User, {foreignKey: 'ClubId' })
User.belongsTo(Club)
Club.hasMany(Coach)
Coach.belongsTo(Club)


User.hasMany(Login, {foreignKey: 'UserId' })
Login.belongsTo(User)
User.hasMany(Task)
Task.belongsTo(User)


Coach.hasOne(User)
User.belongsTo(Coach)