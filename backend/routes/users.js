const express = require('express')
const userRouter = express.Router()
const UserController = require('../controllers/user.controller')


userRouter.get("/", UserController.Get)
userRouter.get("/:id", UserController.GetById)
userRouter.post("/:id", UserController.Post)
userRouter.put("/:id", UserController.Update)
userRouter.delete("/:id", UserController.Delete)

module.exports = userRouter







/*
userRouter.get("/", Controller.GetRouter)
userRouter.get("/:id", Controller.GetByIdRouter)
userRouter.post("/add", Controller.PostRouter)
userRouter.put("/:id", Controller.UpdateRouter)
userRouter.delete("/:id", Controller.DeleteRouter)

 */


//module.exports = userRouter
//Controller.GetRouter(User,router)
/*
let User_Router = new Router(User, router)
User_Router.GetRouter()
User_Router.GetByIdRouter()
User_Router.PostRouter()
User_Router.UpdateRouter()
User_Router.DeleteRouter()

module.exports = router
*/


/*
const express = require('express')
const router = express.Router()
const User = require('../../db/models/user')
const AllRoutes = require('./router')

/*
AllRoutes.GetRouter(User, router)
AllRoutes.GetByIdRouter(User, router)
AllRoutes.PostRouter(User, router)
AllRoutes.UpdateRouter(User, router)
AllRoutes.DeleteRouter(User, router)

module.exports = router
*/
/*
//Get
router.get('/', (req, res) =>
        User.findAll()
            .then(users => {
                console.log(users)
                res.sendStatus(200)
            })
            .catch(err => console.log(err)))
*/
/*
//Post
router.post('/add', function (req, res) {
    return User.create({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthDate: req.body.birthDate,
        address: req.body.address,
        photoURL: req.body.photoURL,
        phone: req.body.phone,
        isApproved: req.body.isApproved,
        isPrime: req.body.isPrime,
        salary: req.body.salary,
        currentRole: req.body.currentRole,
        ClubId: req.body.ClubId,
        CoachId: req.body.CoachId
    }).then(() => res.json('Added!'))
        .catch(err => res.status(400).json('Error' + err));
});

/*
//Delete
router.delete("/:id", function(req, res, next) {
    User.destroy({
        where: {
            id: req.params.id
        }
    }) .then(() => res.json('Deleted!'))
        .catch(err => res.status(400).json('Error' + err))
})
*/
/*
//Update
router.put('/:id', function (req, res) {
    User.update(
        {
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthDate: req.body.birthDate,
            address: req.body.address,
            photoURL: req.body.photoURL,
            phone: req.body.phone,
            isApproved: req.body.isApproved,
            isPrime: req.body.isPrime,
            salary: req.body.salary,
            currentRole: req.body.currentRole,
            ClubId: req.body.ClubId,
            CoachId: req.body.CoachId
        },
        {where: {
                id: req.params.id
            }}
    )
        .then(() => res.json('Updated!'))
        .catch(err => res.status(400).json('Error' + err))
})
*/