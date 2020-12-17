const Repository = require('./repository')
const Login = require('../models/login')

class LoginRepository extends Repository{
    constructor() {
        super(Login);
    }

}

module.exports = new LoginRepository