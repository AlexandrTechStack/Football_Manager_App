const ClubBl = require('../services/bl.service/club.bl')
const UserBl = require('../services/bl.service/user.bl')

const UserImageController = async (req, res) => {
    try {
        const result = await UserBl.ImageUpload.uploadImage(req, res)
        console.log('file:', result)
        return res.json(result)
    } catch (err) {
        return res.status(400).send(JSON.stringify(err.message) )
    }
}
const ClubImageController = async (req, res) => {
    try {
        const result = await ClubBl.ImageUpload.uploadImage(req, res)
        console.log('file:', result)
        return res.json(result)
    } catch (err) {
        return res.status(400).send(JSON.stringify(err.message) )
    }
}

module.exports = {UserImageController, ClubImageController}