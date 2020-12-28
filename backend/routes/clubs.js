const express = require('express')
const clubRouter = express.Router()
const ClubController = require('../controllers/club.controller')


clubRouter.get("/", ClubController.Get)
clubRouter.get("/:id", ClubController.GetById)
clubRouter.post("/add", ClubController.Post)
clubRouter.put("/:id", ClubController.Update)
clubRouter.delete("/:id", ClubController.Delete)

module.exports = clubRouter