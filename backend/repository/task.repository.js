const Repository = require('./repository')
const Task = require('../models/task')

class TaskRepository extends Repository{
    constructor() {
        super(Task);
    }

}

module.exports = new TaskRepository