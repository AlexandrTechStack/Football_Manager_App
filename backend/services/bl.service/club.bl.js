const BaseBl = require('./base.bl')
const ClubRepository = require('../../repository/club.repository')

class ClubBl extends BaseBl{
    constructor() {
        super(ClubRepository);
    }

}

module.exports = new ClubBl()