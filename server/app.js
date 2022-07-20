//Import express library
const express = require("express");
const cors = require( 'cors' );
const { categoriesRouter } = require("./routers/categoriesRoutes");

const app = express();

app.use(express.json());

app.use('/api/v1/categories', categoriesRouter )

module.exports = {app};