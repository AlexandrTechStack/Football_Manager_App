const Repository = require('./repository')
const Club = require('../models/club')

class ClubRepository extends Repository{
    constructor() {
        super(Club);
    }

}

module.exports = new ClubRepository