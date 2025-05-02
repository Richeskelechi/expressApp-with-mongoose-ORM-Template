function response(code, message, data = null, type = "Success", apiId = null) {
    return {
      apiId,
      statusCode: code,
      message,
      type,
      data,
    };
  }
  
  module.exports = { response };
  