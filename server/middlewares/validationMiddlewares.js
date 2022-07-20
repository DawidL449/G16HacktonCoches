const { body } = require('express-validator')
const { validationResult } = require( 'express-validator' );
const { AppError } = require('../utils/appError');

const validationDateUsers = [
body('name').notEmpty().withMessage('Name cannot be empty'),
body('email')
  .notEmpty()
  .withMessage('Email cannot be empty')
  .isEmail()
  .withMessage('Email not valid'),
body('password')
  .notEmpty()
  .withMessage('Password cannot be Empty')
  .isLength({ min: 8 })
  .withMessage('Password must be at least 8 characters long')
]


const checkValidation = (req, res, next) => {
  
  const errors = validationResult(req);

  const msg = errors.array().map( ( {msg} ) => msg );

  const errorMsg = msg.join('. ') 
  
  if (!errors.isEmpty()) {
    return next( new AppError (errorMsg, 400 ) )
  }
    next();
}

module.exports = { validationDateUsers, checkValidation }