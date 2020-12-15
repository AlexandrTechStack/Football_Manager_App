const Controller = require('./controller')
const CoachRepository = require('../repository/coach.repository')

let CoachController = new Controller(CoachRepository)

module.exports =  CoachController


/*const repository = require('../repository/repository')
const Coach = require('../models/coach')


const GetRouter = (req, res) => {
    repository.getAllIem(Coach)
        .then(value => {
            console.log(value)
            res.sendStatus(200)
        })
        .catch(err => console.log(err))
}

const GetByIdRouter = (req, res) => {
    repository.getByIdItem(Coach, req.params.id)
        .then(value => {
            console.log(value)
            res.sendStatus(200)
        })
        .catch(err => console.log(err))
}

const PostRouter = (req, res) => {
    repository.postItem(Coach, req.body)
        .then(() => res.json('Added!'))
        .catch(err => res.status(400).json('Error' + err));

}

const UpdateRouter = (req, res) => {
    repository.updateItem(Coach, req.body, req.params.id)
        .then(() => res.json('Updated!'))
        .catch(err => res.status(400).json('Error' + err))
}

const DeleteRouter = (req, res) => {
    repository.deleteItem(Coach, req.params.id)
        .then(() => res.json('Deleted!'))
        .catch(err => res.status(400).json('Error' + err))
}

module.exports = { GetRouter, GetByIdRouter, PostRouter, UpdateRouter, DeleteRouter }
 */