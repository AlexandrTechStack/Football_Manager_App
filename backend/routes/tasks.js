const express = require('express')
const taskRouter = express.Router()
const TaskController = require('../controllers/task.controller')


taskRouter.get("/",TaskController.Get)
taskRouter.get("/:id",TaskController.GetById)
taskRouter.post("/add",TaskController.Post)
taskRouter.put("/:id",TaskController.Update)
taskRouter.delete("/:id",TaskController.Delete)

module.exports = taskRouter


/*const express = require('express')
const taskRouter = express.Router()
const Controller = require('../controllers/task_controller')

taskRouter.get("/", Controller.GetRouter)
taskRouter.get("/:id", Controller.GetByIdRouter)
taskRouter.post("/add", Controller.PostRouter)
taskRouter.put("/:id", Controller.UpdateRouter)
taskRouter.delete("/:id", Controller.DeleteRouter)


module.exports = taskRouter

 */


/*
const express = require('express')
const router = express.Router()
const Router = require('./router')
const Task = require('../models/task')

let Task_Router = new Router(Task, router)
Task_Router.GetRouter()
Task_Router.GetByIdRouter()
Task_Router.PostRouter()
Task_Router.UpdateRouter()
Task_Router.DeleteRouter()

module.exports = router

 */