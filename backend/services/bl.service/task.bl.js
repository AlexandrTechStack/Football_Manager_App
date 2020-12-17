const BaseBl = require('./base.bl')
const TaskRepository = require('../../repository/task.repository')

class TaskBl extends BaseBl{
    constructor() {
        super(TaskRepository);
    }

}

module.exports = new TaskBl()