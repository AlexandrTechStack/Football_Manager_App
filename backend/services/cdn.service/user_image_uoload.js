const ImageUpload = require('./image_upload')
const User = require('../../models/user')

let UserImageUpload = new ImageUpload(User)

module.exports =  UserImageUpload