const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') })

aws.config.update({
    secretAccessKey: process.env.cdnSecret,
    accessKeyId: process.env.cdnID,
    region: process.env.cdnRegion
})

const s3 = new aws.S3()

//File validation BL
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(new Error('Invalid image type, please select from JPEG or PNG'), false)
    }
}

const upload = multer({
    fileFilter: fileFilter,
    storage: multerS3({
        s3: s3,
        bucket: process.env.CDNBUCKET,
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname});

        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString())
            console.log(file)
        }
    })
})
module.exports = upload