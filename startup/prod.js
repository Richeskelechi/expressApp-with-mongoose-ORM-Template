var helmet = require("helmet");
var compression = require("compression");

module.exports = function(app) {
  app.use(helmet());
  app.use(compression());
};