const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

exports.cloudinaryConnecton = cloudinary.config({
    cloud_name: 'dvre9l02u',
    api_key: '948836872232846',
    api_secret: 'eyK5MYAGWrU0A0duaKN01hjX7HY',
    //   secure: true,
});
// Configure Cloudinary
// cloudinary.config({
//     cloud_name: 'your_cloud_name',
//     api_key: 'your_api_key',
//     api_secret: 'your_api_secret'
// });

// Configure Cloudinary storage
// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//         folder: 'uploads/gallary', // specify the folder in Cloudinary
//         format: 'png', // specify the desired format (you can change it based on your needs)
//         public_id: (req, file) => `single-upload-${Date.now()}`
//     }
// });

// // Create multer middleware with Cloudinary storage
// const upload = multer({ storage: storage });

// Middleware for single image upload
exports.singleImageUpload =async (req, res, next) => {
    if (req?.file) {
        try {
            await cloudinary.uploader.upload(req.file.path, async (error, result) => {
                req.body.imagePath = result?.secure_url
                next()
            })
        } catch (error) {
            console.log(error.message)
            return res.status(500).send({
                message: "Internal server error! Image Not Upload."
            })
        }
    } else {
        return res.status(400).send({
            message: "Bad request!"
        })
    }
}
