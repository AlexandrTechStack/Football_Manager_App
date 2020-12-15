/*
const GetRouter = (model, rout) => {
    rout.get('/', (req, res) =>
        model.findAll()
            .then(value => {
                console.log(value)
                res.sendStatus(200)
            })
            .catch(err => console.log(err)))
}

const GetByIdRouter = (model, rout) => {
    rout.route('/:id').get((req, res) =>
        model.findByPk(req.params.id)
            .then(value => {
                console.log(value)
                res.sendStatus(200)
            })
            .catch(err => console.log(err)))
}

const PostRouter = (model, rout) => {
    rout.post('/add', function (req, res) {
        model.create(
            req.body
            )
            .then(() => res.json('Added!'))
            .catch(err => res.status(400).json('Error' + err));
    });
}


const UpdateRouter = (model, rout) => {
    rout.put('/:id', function (req, res) {
        model.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }
        )
            .then(() => res.json('Updated!'))
            .catch(err => res.status(400).json('Error' + err))
    })
}

const DeleteRouter = (model, rout) => {
    rout.delete("/:id", function (req, res) {
        model.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => res.json('Deleted!'))
            .catch(err => res.status(400).json('Error' + err))
    })
}

module.exports = { GetRouter, GetByIdRouter, PostRouter, UpdateRouter, DeleteRouter }
*/

/*
const repository = require('../repository/repository')

module.exports = class Router {
    constructor(model, rout) {
        this.model = model
        this.rout = rout
    }

    GetRouter = () => {
        this.rout.get('/', (req, res) =>
            this.model.findAll()
                .then(value => {
                    console.log(value)
                    res.sendStatus(200)
                })
                .catch(err => console.log(err)))
    }

    GetByIdRouter = () => {
        this.rout.route('/:id').get((req, res) =>
            this.model.findByPk(req.params.id)
                .then(value => {
                    console.log(value)
                    res.sendStatus(200)
                })
                .catch(err => console.log(err)))
    }

    PostRouter = () => {
        this.rout.post('/add', function (req, res) {
            this.model.create(
                req.body
            )
                .then(() => res.json('Added!'))
                .catch(err => res.status(400).json('Error' + err));
        });
    }


    UpdateRouter = () => {
        this.rout.put('/:id', function (req, res) {
            this.model.update(
                req.body,
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
                .then(() => res.json('Updated!'))
                .catch(err => res.status(400).json('Error' + err))
        })
    }

    DeleteRouter = () => {
        this.rout.delete("/:id", function (req, res) {
            this.model.destroy({
                where: {
                    id: req.params.id
                }
            }).then(() => res.json('Deleted!'))
                .catch(err => res.status(400).json('Error' + err))
        })
    }
}
*/


