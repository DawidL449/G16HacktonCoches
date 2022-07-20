const  jwt = require('jsonwebtoken')
const dotenv = require('dotenv')


const { User } = require("../models/userModel");
const { catchAsync } = require("../utils/catchAsync");
const {AppError} = require('../utils/appError')


dotenv.config({ path: './config.env'})

const userExists = catchAsync( async (req, res, next) => {

    try {
        const { id } = req.params;
    
        const user = await User.findOne({ where: { id },  attributes: {exclude: ['password'] } });
    
        if (!user) {
          return next(new AppError('user not exists', 404))   
        }
    
        req.user = user;
       
        next();
      } catch (error) {
        console.log(error);
      }
});

const protectDeleteUser = catchAsync( async (req,res,next) =>{
  
  if (req.session.email === req.user.email ) {    
      next();
  }else{
    return next(new AppError('Solo puedes eliminar una cuenta de tu propiedad',403))
  } 
} );

const protectToken = catchAsync(async (req, res, next) =>{
  let token;

  if (req.headers.authorization && 
    req.headers.authorization.startsWith('Bearer')) {
    
     token = req.headers.authorization.split(' ')[1]    
  }

  if (!token) {
    return next(new AppError('No estas autorizado', 403))
  }

  //Validate Token

  const decoded = await jwt.verify(token, process.env.JWT_SECRET)

  const user = await User.findOne( {where: {id: decoded.id, status: 'active'}} )
  
  req.session = user
 
  if (!user) {
    return next(new AppError('The owner of thi token is no  longer available'))
  }

  next()
})

const protectAdmin = catchAsync(async (req, res, next) => {   


   if (req.session.role !== 'MASTER') {
      return next(new AppError('No estas autorizado solo el rol administrador', 403))
   }
   
   next()
})


module.exports= { userExists, protectToken, protectAdmin, protectDeleteUser }