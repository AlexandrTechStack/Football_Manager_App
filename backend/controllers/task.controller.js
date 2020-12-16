const Controller = require('./controller')
const TaskBl = require('../services/bl.service/task.bl')

class TaskController extends Controller{
    constructor() {
        super(TaskBl);
    }

}

module.exports =  TaskController