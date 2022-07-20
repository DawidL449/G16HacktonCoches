const express = require('express');
const { getAllCars, createCars } = require('../controller/carController');

const router = express.Router();


router.get('/', getAllCars)
router.post('/createcars', createCars )

module.exports = { carsRouter: router }