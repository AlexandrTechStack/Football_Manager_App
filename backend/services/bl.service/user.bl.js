const BaseBl = require('./base.bl')
const UserRepository = require('../../repository/user.repository')

let UserBl = new BaseBl(UserRepository)

module.exports = UserBl