const express = require('express')
const passport = require('passport')
const AuthRole = require('../services/auth.service/roles')
const userRouter = express.Router()
const UserController = require('../controllers/user.controller')


userRouter.get("/",  UserController.Get)//[google]
userRouter.get("/:id", UserController.GetById)
userRouter.post("/add", UserController.Post)
userRouter.put("/:id",  UserController.Update) //passport.authenticate('jwt', {session: false}),
userRouter.delete("/:id", UserController.Delete)

module.exports = userRouter
/*
//MW
(req, res) => {
    return AuthRole(req, res, 'admin')
},
 */