const Repository = require('./repository')
const Task = require('../models/task')

let TaskRepository = new Repository(Task)

module.exports =  TaskRepository