const ImageUpload = require('./image_upload')
const ClubRepository = require('../../repository/club.repository')

let ClubImageUpload = new ImageUpload(ClubRepository)

module.exports =  ClubImageUpload