const Joi = require("joi");
const JoiObjectId = require("joi-objectid")(Joi);

module.exports = function() {
    Joi.objectId = JoiObjectId(Joi);
};
