const BaseBl = require('./base.bl')
const UserRepository = require('../../repository/user.repository')

class UserBl extends BaseBl{
    constructor() {
        super(UserRepository);
    }
    isRegister = (body) => {
        return this.repository.isRegister(body)
    }
    registerUser = (body) => {
        return this.repository.registerUser(body)
    }
}

module.exports = new UserBl()