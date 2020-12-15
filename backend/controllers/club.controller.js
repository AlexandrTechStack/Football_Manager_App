const Controller = require('./controller')
const ClubRepository = require('../repository/club.repository')

let ClubController = new Controller(ClubRepository)

module.exports =  ClubController

/*
const repository = require('../repository/repository')
const Club = require('../models/club')
const GetRouter = (req, res) => {
    repository.getAllIem(Club)
        .then(value => {
            console.log(value)
            res.sendStatus(200)
        })
        .catch(err => console.log(err))
}

const GetByIdRouter = (req, res) => {
    repository.getByIdItem(Club, req.params.id)
        .then(value => {
            console.log(value)
            res.sendStatus(200)
        })
        .catch(err => console.log(err))
}

const PostRouter = (req, res) => {
    repository.postItem(Club, req.body)
        .then(() => res.json('Added!'))
        .catch(err => res.status(400).json('Error' + err));

}

const UpdateRouter = (req, res) => {
    repository.updateItem(Club, req.body, req.params.id)
        .then(() => res.json('Updated!'))
        .catch(err => res.status(400).json('Error' + err))
}

const DeleteRouter = (req, res) => {
    repository.deleteItem(Club, req.params.id)
        .then(() => res.json('Deleted!'))
        .catch(err => res.status(400).json('Error' + err))
}

module.exports = { GetRouter, GetByIdRouter, PostRouter, UpdateRouter, DeleteRouter }
 */