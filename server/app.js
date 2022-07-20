//Import express library
const express = require("express");
const cors = require( 'cors' );
const { categoriesRouter } = require("./routers/categoriesRoutes");
const { carsRouter } = require("./routers/carsRoutes");

const app = express();

app.use(express.json());

app.use('/api/v1/categories', categoriesRouter )
app.use('/api/v1/cars', carsRouter)

module.exports = {app};