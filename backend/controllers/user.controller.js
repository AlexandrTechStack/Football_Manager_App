const Controller = require('./controller')
const UserBl = require('../services/bl.service/user.bl')

class UserController extends Controller{
    constructor() {
        super(UserBl);
    }

}

module.exports =  UserController