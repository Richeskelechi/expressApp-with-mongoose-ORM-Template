const express = require('express');
const serverRouter = express.Router();

const serverHealthController = require('../controllers/serverController');

serverRouter.get('/', serverHealthController.getServerHealth)

module.exports = serverRouter