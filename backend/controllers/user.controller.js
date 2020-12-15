const Controller = require('./controller')
const UserBl = require('../services/bl.service/user.bl')

let UserController = new Controller(UserBl)

module.exports =  UserController