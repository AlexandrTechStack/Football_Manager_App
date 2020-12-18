const BaseBl = require('./base.bl')
const LoginRepository = require('../../repository/login.repository')

class LoginBl extends BaseBl{
    constructor() {
        super(LoginRepository);
    }

    createLogin = (hash, id) => {
        return LoginRepository.createLogin(hash, id)
    }
    findPassword = (candidate) => {
        return LoginRepository.findPassword(candidate)
}
}

module.exports = new LoginBl()