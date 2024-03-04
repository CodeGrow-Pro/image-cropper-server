const express = require('express');
const route = express.Router();
const userController = require('../../../controllers/user.controller')
const userMiddleware = require('../../../middleware/user.middleware')
const gallaryMiddleware = require('../../../middleware/gallary.middleware') 
const gallaryController = require('../../../controllers/gallary.controller');
const { singleImageUpload } = require('../../../middleware/uploadOnCloudinary');
route.post('/user/register',userMiddleware.uploadImage,userController.register);
route.get('/user/filter',userController.filter)
//--------------------------------------Gallary Routes-------------------------------
route.post('/gallary/add-images/:id',gallaryMiddleware.multiImageUpload,gallaryController.addImageInGallary)
route.post('/image/:id',userMiddleware.uploadImage2,gallaryController.photoUploaded);
route.post('/upload-image/:id',singleImageUpload,gallaryController.photoUploaded);
route.get('/photos/filter',gallaryController.filterImages)
module.exports = route;