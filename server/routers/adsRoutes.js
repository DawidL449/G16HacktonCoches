const express = require('express');
const { createAds, getAds, getAdsDiscount, getAdsById } = require('../controller/adsController');


//Utils
const { upload } = require('../utils/multer')

const router = express.Router();


router.get('/', getAds)
router.get('/getdiscount', getAdsDiscount)
router.get('/:id', getAdsById)
router.post('/createads', upload.single('img'), createAds )


module.exports = { adsRouter: router }