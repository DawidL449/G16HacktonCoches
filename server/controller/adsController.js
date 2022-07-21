const { storage } = require("../utils/firebase");
const { ref, uploadBytes, getDownloadURL } = require('firebase/storage');
const { Ads } = require("../models/adsModel");

const createAds = async (req ,res) =>{

const { brand, model, color, price, discount } = req.body    

const imgRef = ref( storage, `ads/${req.file.originalname}` )
const resImg = await uploadBytes( imgRef, req.file.buffer )
const urlImg = await getDownloadURL( imgRef, resImg.metadata.fullPath )

const createAds = await Ads.create( { brand, model, color, price, img:urlImg, discount} )

res.status(200).json({ createAds  })
}

const getAds = async ( req, res ) =>{

    const getAllAds = await Ads.findAll()
    res.status(200).json({ getAllAds })
}

const getAdsDiscount = async ( req,res ) => {
    const getAllAds = await Ads.findAll({ where:{ discount:"active" } })

    res.status(200).json({ getAllAds })
}

const getAdsById = async (req,res) => {

    const { id:idAds } = req.params;
    const getAdsId = await Ads.findOne( { where: { id:idAds } } )

    if (!getAdsId) {
        return res.status(403).json({ status: 'failed', message: "Not found ads"})
    }

    res.status(200).json({ getAdsId })
}

module.exports = { createAds, getAds, getAdsDiscount, getAdsById }