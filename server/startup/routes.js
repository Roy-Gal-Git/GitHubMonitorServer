const express = require("express");
const github = require("../routes/github");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/pull-requests", github);
};
