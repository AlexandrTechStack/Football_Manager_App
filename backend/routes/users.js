const express = require('express')
const passport = require('passport')
const AuthRole = require('../services/auth.service/roles')
const userRouter = express.Router()
const UserController = require('../controllers/user.controller')


userRouter.get("/", (req, res) => {
    return AuthRole(req, res, 'admin')
}, UserController.Get)//[google]
userRouter.get("/:id", UserController.GetById)
userRouter.post("/add", UserController.Post)
userRouter.put("/:id", passport.authenticate('jwt', {session: false}), UserController.Update)
userRouter.delete("/:id", UserController.Delete)

module.exports = userRouter