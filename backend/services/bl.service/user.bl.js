const BaseBl = require('./base.bl')
const UserRepository = require('../../repository/user.repository')
const ImageUpload = require("../cdn.service/image_upload");


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
    ImageUpload = new ImageUpload(UserRepository)
}

module.exports = new UserBl()