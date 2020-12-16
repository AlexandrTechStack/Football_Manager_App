const upload = require('./media_upload')

const util = require('util')
const singleUpload = upload.single('image')
const singleUploadPromise = util.promisify(singleUpload)


class ImageUpload {
    constructor(repository) {
        this.repository = repository
    }
    uploadImage = async (req, res) => {
        try {
            await singleUploadPromise(req, res)
            this.repository.updateItem({photoURL: req.file.location}, 1)
            console.log('file:', req.file)
            return {"imageUrl": req.file.location}
        } catch (err) {
            throw new Error(err.message)
        }
    }
}
module.exports = ImageUpload
//{photoURL: req.file.location}






/*
const upload = require('./media_upload')
const repository = require('../../repository/repository')
const User = require('../../models/user')
const util = require('util')
const singleUpload = upload.single('image')
const singleUploadPromise = util.promisify(singleUpload)
const uploadImage = async (req, res) => {
    try {
        await singleUploadPromise(req, res)
        repository.updateItem(User, {photoURL: req.file.location},1)
        console.log('file:', req.file)
        return {"imageUrl": req.file.location}
    } catch (err) {
        throw new Error(err.message)
    }
}
module.exports = uploadImage
 */