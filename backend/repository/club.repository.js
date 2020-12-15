const Repository = require('./repository')
const Club = require('../models/club')

let ClubRepository = new Repository(Club)

module.exports =  ClubRepository