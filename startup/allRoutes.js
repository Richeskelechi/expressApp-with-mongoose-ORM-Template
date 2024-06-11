const express = require("express");

const health = require("../routes/serverRoute");

const error = require("../middlewares/error");


module.exports = function (app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended:true }));

  app.use("", health);
  
  app.use(error);
};