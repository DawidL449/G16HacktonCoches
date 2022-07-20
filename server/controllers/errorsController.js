//Global error handler

const globalErrorHandler = ( error, req, res, next ) => {
    
    const statusCode = error.statusCode || 500;
    const status = error.status || 'fail';

    res.status(statusCode).json({ 
        status,        
        message : error.message,
        error,
        stack: error.stack
     })
} 

module.exports = { globalErrorHandler }