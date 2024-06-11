const winston = require("winston");

module.exports = async function (err, req, res, next) {
  winston.error(err.message, err);

  res
    .status(500)
    .send({ apiId: req.apiId, statusCode: 500, message: "Failure", data: "Something failed. Please try again" });
};