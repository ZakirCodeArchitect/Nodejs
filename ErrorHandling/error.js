const error = new Error("Something went wrong");

// console.log(error.message)

const CustomError = require('./customError');

throw new CustomError("New Custom Error")