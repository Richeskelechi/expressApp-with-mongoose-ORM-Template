const { response } = require('../response/response');

const serverService = {
    getServerHealth: async () => {
        try {
            return response(200, "Healthy Server", null, "Success");
        } catch (error) {
            console.log(error);
            return response(500, error.message, null, "Failure");
        }
    }
};

module.exports = serverService;