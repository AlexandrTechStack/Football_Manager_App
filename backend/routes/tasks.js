const express = require('express')
const taskRouter = express.Router()
const TaskController = require('../controllers/task.controller')


taskRouter.get("/",TaskController.GetRouter)
taskRouter.get("/:id",TaskController.GetByIdRouter)
taskRouter.post("/:id",TaskController.PostRouter)
taskRouter.put("/:id",TaskController.UpdateRouter)
taskRouter.delete("/:id",TaskController.DeleteRouter)

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