"use strict";

var express = require("express");

var app = express();
app.use(function (req, res, next) {
  console.log("z8");
});
module.exports = app;