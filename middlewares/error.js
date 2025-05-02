const winston = require("winston");
const { response } = require("../response/response");

module.exports = function (err, req, res, next) {
  // Log full error stack for visibility
  winston.error(err.stack || err.message, err);

  const code = err.statusCode || 500;
  const message = err.message || "Something failed. Please try again.";

  return res.status(code).json(
    response(code, message, null, "Failure", req.apiId)
  );
};
