const serverService = require("../services/serverService");

const serverController = {
  getServerHealth: async (req, res) => {
    const result = await serverService.getServerHealth();
    res.status(result.code).json(result);
  }
};

module.exports = serverController;
