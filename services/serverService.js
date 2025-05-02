const { response } = require('../response/response');

const serverService = {
  getServerHealth: async () => {
    return response(200, "Healthy Server", null, "Success");
  }
};

module.exports = serverService;
