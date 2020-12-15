//const uploadImage = require('../services/cdn.service/image_upload')
const UserImageUpload = require('../services/cdn.service/user_image_uoload')

const PostImageController = async (req, res) => {
    try {
        const result = await UserImageUpload.uploadImage(req, res)
        console.log('file:', result)
        return res.json(result)
    } catch (err) {
        return res.status(400).send(JSON.stringify(err.message) )
    }
}

module.exports = {PostImageController}





/*
const upload = require('../services/cdn.service/media_upload')
const repository = require('../repository/repository')
const User = require('../models/user')
const singleUpload = upload.single('image')

const PostRouter = (req, res) => {
    singleUpload(req, res, (err) => {
        if(err) {
            return res.status(400).send({error: {title:'File Upload Error', detail: err.message} })
        }
        repository.updateItem(User, {photoURL: req.file.location},1)
        console.log('file:', req.file)
        return res.json({"imageUrl": req.file.location})
    })
}

module.exports = { PostRouter }

 */