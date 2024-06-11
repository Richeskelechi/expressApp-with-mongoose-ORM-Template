const winston = require("winston");
const response = (code, msg, data, type) => {
    winston.info(`${code}..................${msg}`)
    return { code: code, type:type, msg:msg, data:data };
};

module.exports = {
    response,
};