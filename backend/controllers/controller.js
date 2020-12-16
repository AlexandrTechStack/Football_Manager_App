class Controller {

    constructor(Bl) {
        this.Bl = Bl
    }

    Get = (req, res) => {
        return this.Bl.Get()
            .then(value => {
                console.log(value)
                res.sendStatus(200)
            })
            .catch(err => console.log(err))
    }

    GetById = (req, res) => {
        return this.Bl.GetById(req.params.id)
            .then(value => {
                console.log(value)
                res.sendStatus(200)
            })
            .catch(err => console.log(err))
    }

    Post = (req, res) => {
        return this.Bl.Post(req.body)
            .then(() => res.json('Added!'))
            .catch(err => res.status(400).json('Error' + err));

    }

    Update = (req, res) => {
        return this.Bl.Update(req.body, req.params.id)
            .then(() => res.json('Updated!'))
            .catch(err => res.status(400).json('Error' + err))
    }

    Delete = (req, res) => {
        return this.Bl.Delete(req.params.id)
            .then(() => res.json('Deleted!'))
            .catch(err => res.status(400).json('Error' + err))
    }

    NewUser = (req, res) => {
        return this.Bl.Register(req.body)
            .then(() => res.json('User added'))
            .catch(err => res.status(400).json('Error' + err));

    }
}
module.exports = Controller