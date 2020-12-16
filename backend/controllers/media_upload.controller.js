//const uploadImage = require('../services/cdn.service/image_upload')
const UserImageUpload = require('../services/cdn.service/user_image_upload')
const ClubImageUpload = require('../services/cdn.service/club_image_upload')

const UserImageController = async (req, res) => {
    try {
        const result = await UserImageUpload.uploadImage(req, res)
        console.log('file:', result)
        return res.json(result)
    } catch (err) {
        return res.status(400).send(JSON.stringify(err.message) )
    }
}
const ClubImageController = async (req, res) => {
    try {
        const result = await ClubImageUpload.uploadImage(req, res)
        console.log('file:', result)
        return res.json(result)
    } catch (err) {
        return res.status(400).send(JSON.stringify(err.message) )
    }
}

module.exports = {UserImageController, ClubImageController}