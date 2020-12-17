const BaseBl = require('./base.bl')
const LoginRepository = require('../../repository/login.repository')

class LoginBl extends BaseBl{
    constructor() {
        super(LoginRepository);
    }

}

module.exports = new LoginBl()