const BaseBl = require('./base.bl')
const UserRepository = require('../../repository/user.repository')

class UserBl extends BaseBl{
    constructor() {
        super(UserRepository);
    }

}

module.exports = UserBl