const express = require('express')
const mediaRouter = express.Router()
const Controller = require('../controllers/media_upload.controller')

mediaRouter.post("/upload", Controller.PostImageController)

module.exports = mediaRouter