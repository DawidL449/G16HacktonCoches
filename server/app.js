//Import express library
const express = require("express");
const cors = require( 'cors' );
const rateLimit = require('express-rate-limit')
const  helmet  = require('helmet');
const compression = require('compression')
const morgan = require('morgan')

const { userRoutes } = require("./routes/userRoutes");
const { globalErrorHandler } = require("./controllers/errorsController");




//Create the server
const app = express();

//Limit request

const limiter = rateLimit({
    
    max: 10000,
    windowMs: 60 * 60 * 1000, //1 Hr 
    message: 'Too many requests from this IP'
})

app.use(limiter)

//Enable cors

app.use(cors());

//Enable incoming JSON data

app.use(express.json())
app.use(helmet());
app.use(compression());

 
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
else  app.use(morgan('combined'));




//Endpoints

app.use( '/api/v1/users', userRoutes )




//Global error handler
app.use('*', globalErrorHandler )

module.exports = {app};