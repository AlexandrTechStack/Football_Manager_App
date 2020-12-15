class Controller {

    constructor(Bl) {
        this.Bl = Bl
    }

    GetRouter = (req, res) => {
        this.Bl.GetMethod()
            .then(value => {
                console.log(value)
                res.sendStatus(200)
            })
            .catch(err => console.log(err))
    }

    GetByIdRouter = (req, res) => {
        this.Bl.GetByIdMethod(req.params.id)
            .then(value => {
                console.log(value)
                res.sendStatus(200)
            })
            .catch(err => console.log(err))
    }

    PostRouter = (req, res) => {
        this.repository.postItem(req.body)
            .then(() => res.json('Added!'))
            .catch(err => res.status(400).json('Error' + err));

    }

    UpdateRouter = (req, res) => {
        this.repository.updateItem(req.body, req.params.id)
            .then(() => res.json('Updated!'))
            .catch(err => res.status(400).json('Error' + err))
    }

    DeleteRouter = (req, res) => {
        this.repository.deleteItem(req.params.id)
            .then(() => res.json('Deleted!'))
            .catch(err => res.status(400).json('Error' + err))
    }
}
module.exports = Controller