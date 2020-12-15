const Controller = require('./controller')
const TaskRepository = require('../repository/task.repository')

let TaskController = new Controller(TaskRepository)

module.exports =  TaskController


/*const repository = require('../repository/repository')
const Task = require('../models/task')


const GetRouter = (req, res) => {
    repository.getAllIem(Task)
        .then(value => {
            console.log(value)
            res.sendStatus(200)
        })
        .catch(err => console.log(err))
}

const GetByIdRouter = (req, res) => {
    repository.getByIdItem(Task, req.params.id)
        .then(value => {
            console.log(value)
            res.sendStatus(200)
        })
        .catch(err => console.log(err))
}

const PostRouter = (req, res) => {
    repository.postItem(Task, req.body)
        .then(() => res.json('Added!'))
        .catch(err => res.status(400).json('Error' + err));

}

const UpdateRouter = (req, res) => {
    repository.updateItem(Task, req.body, req.params.id)
        .then(() => res.json('Updated!'))
        .catch(err => res.status(400).json('Error' + err))
}

const DeleteRouter = (req, res) => {
    repository.deleteItem(Task, req.params.id)
        .then(() => res.json('Deleted!'))
        .catch(err => res.status(400).json('Error' + err))
}

module.exports = { GetRouter, GetByIdRouter, PostRouter, UpdateRouter, DeleteRouter }

 */