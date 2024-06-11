const serverService = require("../services/serverService");
const handleAsync = require('../helpers/asyncHandlers');

const serverController = {
    getServerHealth: async (req, res) => {
        handleAsync(serverService.getServerHealth(), res);
    }
};

module.exports = serverController;
