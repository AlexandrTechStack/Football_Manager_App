const express = require('express')
const mediaRouter = express.Router()
const Controller = require('../controllers/media_upload.controller')

mediaRouter.post("/user", Controller.UserImageController)
mediaRouter.post("/club", Controller.ClubImageController)

module.exports = mediaRouter