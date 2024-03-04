const multer = require('multer');
const { singleImageUpload } = require('./uploadOnCloudinary');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/profile')
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now().toString() + '-' + Math.floor(Math.random() * 1000)
        const fileExtension = path.extname(file.originalname).toLowerCase();
        cb(null, file.fieldname + uniqueName + fileExtension)
    }
})
const upload = multer({ storage: storage })
exports.uploadImage = async (req, res, next) => {
    const uploads = upload.single('upload')
    uploads(req, res, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log(req.file)
            next()
        }
    })
}

exports.uploadImage2 = async (req, res, next) => {
    const uploads = upload.single('upload')
    uploads(req, res, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log(req.file) 
            singleImageUpload(req,res,next)
        }
    })
}
  