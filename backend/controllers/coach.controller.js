const Controller = require('./controller')
const CoachBl = require('../services/bl.service/coach.bl')

class CoachController extends Controller{
    constructor() {
        super(CoachBl);
    }

}

module.exports = new CoachController()