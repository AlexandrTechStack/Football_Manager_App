const express = require('express')
const coachRouter = express.Router()
const CoachController = require('../controllers/coach.controller')


coachRouter.get("/", CoachController.Get)
coachRouter.get("/:id", CoachController.GetById)
coachRouter.post("/:id", CoachController.Post)
coachRouter.put("/:id", CoachController.Update)
coachRouter.delete("/:id", CoachController.Delete)

module.exports = coachRouter