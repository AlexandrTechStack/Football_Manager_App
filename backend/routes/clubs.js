const express = require('express')
const clubRouter = express.Router()
const ClubController = require('../controllers/club.controller')


clubRouter.get("/", ClubController.GetRouter)
clubRouter.get("/:id", ClubController.GetByIdRouter)
clubRouter.post("/:id", ClubController.PostRouter)
clubRouter.put("/:id", ClubController.UpdateRouter)
clubRouter.delete("/:id", ClubController.DeleteRouter)

module.exports = clubRouter

/*const express = require('express')
const clubRouter = express.Router()
const Controller = require('../controllers/club_controller')

clubRouter.get("/", Controller.GetRouter)
clubRouter.get("/:id", Controller.GetByIdRouter)
clubRouter.post("/add", Controller.PostRouter)
clubRouter.put("/:id", Controller.UpdateRouter)
clubRouter.delete("/:id", Controller.DeleteRouter)


module.exports = clubRouter
 */
/*
const express = require('express')
const router = express.Router()
const Router = require('./router')
const Club = require('../models/club')

let Club_Router = new Router(Club, router)
Club_Router.GetRouter()
Club_Router.GetByIdRouter()
Club_Router.PostRouter()
Club_Router.UpdateRouter()
Club_Router.DeleteRouter()

module.exports = router

 */