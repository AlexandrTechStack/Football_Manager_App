const Repository = require('./repository')
const User = require('../models/user')
const Club = require('../models/club')
const Task = require('../models/task')
const Login = require('../models/login')

class UserRepository extends Repository{
    constructor() {
        super(User, [Club,Task]);
    }
    isRegister = (body) => {
        return this.model.findOne(body)
    }
    registerUser = (body) => {
        return this.model.create({
            body
        }, {
            include: Login
        });
    }
    /*
    registerUser = (body) => {
        return this.model.create(body)
    }
    */
}

module.exports = new UserRepository