const express = require('express')
const coachRouter = express.Router()
const CoachController = require('../controllers/coach.controller')


coachRouter.get("/", CoachController.GetRouter)
coachRouter.get("/:id", CoachController.GetByIdRouter)
coachRouter.post("/:id", CoachController.PostRouter)
coachRouter.put("/:id", CoachController.UpdateRouter)
coachRouter.delete("/:id", CoachController.DeleteRouter)

module.exports = coachRouter


/*const express = require('express')
const coachRouter = express.Router()
const Controller = require('../controllers/coach_controller')

coachRouter.get("/", Controller.GetRouter)
coachRouter.get("/:id", Controller.GetByIdRouter)
coachRouter.post("/add", Controller.PostRouter)
coachRouter.put("/:id", Controller.UpdateRouter)
coachRouter.delete("/:id", Controller.DeleteRouter)


module.exports = coachRouter
 */







/*
const express = require('express')
const router = express.Router()
const Router = require('./router')
const Coach = require('../models/coach')

let Coach_Router = new Router(Coach, router)
Coach_Router.GetRouter()
Coach_Router.GetByIdRouter()
Coach_Router.PostRouter()
Coach_Router.UpdateRouter()
Coach_Router.DeleteRouter()

module.exports = router

 */