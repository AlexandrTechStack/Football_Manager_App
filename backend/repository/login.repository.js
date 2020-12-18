const Repository = require('./repository')
const Login = require('../models/login')
const User = require("../models/user");

class LoginRepository extends Repository{
    constructor() {
        super(Login);
    }
    createLogin = (hash, id) => {
        return Login.create({
            provider: 'local',
            token: hash,
            UserId: id
        })
    }
    findPassword = (candidate) => {
       return Login.findOne({
            where: {provider: 'local'},
            include: [{
                model: User,
                where: {id: candidate.id} //
            }]
        })
    }
}

module.exports = new LoginRepository