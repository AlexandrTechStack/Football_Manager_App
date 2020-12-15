const Repository = require('./repository')
const User = require('../models/user')
const Club = require('../models/club')
const Task = require('../models/task')

let UserRepository = new Repository(User, [Club,Task])

module.exports =  UserRepository