const { storage } = require("../utils/firebase");
const { ref, uploadBytes, getDownloadURL } = require('firebase/storage')

const createAds = async (req ,res) =>{

const imgRef = ref( storage, `ads/${req.file.originalname}` )
const resImg = await uploadBytes( imgRef, req.file.buffer )
const urlImg = await getDownloadURL( imgRef, resImg.metadata.fullPath )

console.log(urlImg);


res.status(200).json({})
}

module.exports = { createAds }