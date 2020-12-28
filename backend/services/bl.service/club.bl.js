const BaseBl = require('./base.bl')
const ClubRepository = require('../../repository/club.repository')
const ImageUpload = require("../cdn.service/image_upload");

class ClubBl extends BaseBl{
    constructor() {
        super(ClubRepository);
    }
    ImageUpload = new ImageUpload(ClubRepository)
}

module.exports = new ClubBl()