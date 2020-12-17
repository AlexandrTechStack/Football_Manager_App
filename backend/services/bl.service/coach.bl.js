const BaseBl = require('./base.bl')
const CoachRepository = require('../../repository/coach.repository')

class CoachBl extends BaseBl{
    constructor() {
        super(CoachRepository);
    }

}

module.exports = new CoachBl()