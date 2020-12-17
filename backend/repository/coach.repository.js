const Repository = require('./repository')
const Coach = require('../models/coach')

class CoachRepository extends Repository{
    constructor() {
        super(Coach);
    }

}

module.exports = new CoachRepository