const express = require("express");

const health = require("../routes/serverRoute");
const apiIdMiddleware = require('../middlewares/apiId');
const error = require("../middlewares/error");


module.exports = function (app) {
  app.use(apiIdMiddleware);
  app.use(express.json());
  app.use(express.urlencoded({ extended:true }));

  app.use("", health);
  
  app.use(error);
};