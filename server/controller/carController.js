
const { Car } = require("../models/carsModel")

const getAllCars = async ( req, res  ) => {

    const cars = await Car.findAll()
    console.log(cars);

    res.status(200).json({ cars })
}


const createCars = async ( req, res ) =>{

    const { brand, model, color, price } = req.body

    const createCar = await Car.create( { brand, model, color, price } )

    res.status(200).json({ createCar })
}


module.exports = { createCars, getAllCars }