const ErrorHandler = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  console.log(err.stack.red);
  let error = { ...err };
  error.message = err.message;
  if (err.name === 'CastError') {
    message = `Bootcamp not found with id of ${err.value}`;
    error = new ErrorHandler(message, 404);
  }
  res.status(error.statusCode || 500).json({
    error: true,
    message: error.message || 'Something went wrong in server',
  });
};

module.exports = errorHandler;
