const Repository = require('./repository')
const Coach = require('../models/coach')

let CoachRepository = new Repository(Coach)

module.exports =  CoachRepository