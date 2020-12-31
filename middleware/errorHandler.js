const ErrorResponse = require("../model/ErrorResponse");

const errorHandler = (err, req, res, next) => {
  let errors = { ...err };

  // console.log(err);
  // console.log(err.name, err.message);

  // sequelize validator happen
  if (err.name === "SequelizeValidationError") {
    errors = new ErrorResponse(400, {});
    err.errors.forEach((error) => (errors.message[error.path] = error.message));
  }

  res.status(errors.code || 500).json({
    success: false,
    code: errors.code || 500,
    message: errors.message || "Server error",
  });

  next();
};

module.exports = errorHandler;
