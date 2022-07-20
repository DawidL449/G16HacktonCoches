const { Categorie } = require("../models/categoriesModel")

const getAllCategories = async ( req, res  ) => {

    const categories = await Categorie.findAll()
    console.log(categories);

    res.status(200).json({ categories })
}

const createCategories = async ( req, res ) =>{

    const { type } = req.body

    const addCategorie = await Categorie.create( { type } )

    res.status(200).json({ addCategorie })
}


module.exports = { getAllCategories, createCategories }