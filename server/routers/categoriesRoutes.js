const express = require('express');
const { getAllCategories, createCategories } = require('../controller/categoriesController');

const router = express.Router();


router.get('/', getAllCategories)
router.post('/createcategorie', createCategories )

module.exports = { categoriesRouter: router }