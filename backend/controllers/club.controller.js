const Controller = require('./controller')
const ClubBl = require('../services/bl.service/club.bl')

class ClubController extends Controller{
    constructor() {
        super(ClubBl);
    }

}

module.exports =  ClubController