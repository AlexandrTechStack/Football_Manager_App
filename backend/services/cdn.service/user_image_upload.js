const ImageUpload = require('./image_upload')
const UserRepository = require('../../repository/user.repository')

let UserImageUpload = new ImageUpload(UserRepository)

module.exports =  UserImageUpload