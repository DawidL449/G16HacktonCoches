const express = require('express');
const { createAds } = require('../controller/adsController');


//Utils
const { upload } = require('../utils/multer')

const router = express.Router();


//router.get('/', getAllCars)
router.post('/createads', upload.single('img'), createAds )


module.exports = { adsRouter: router }