"use strict";

// const path = require("path");
var express = require("express");

var bodyParser = require("body-parser");

var mongoose = require("mongoose"); // const postsRoutes = require("./routes/posts");


var userRoutes = require("./routes/user"); // H!F7QjybjpcfMCN;


var app = express(); // todo: gitignore this file

mongoose.connect("mongodb+srv://wony:H!F7QjybjpcfMCN@effstudy-epsrv.mongodb.net/effStudy?retryWrites=true&w=majority").then(function () {
  console.log("SUCCESSFUL DB CONNECTION");
}).catch(function () {
  console.log("FAILED DB CONNECTION");
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
});
app.use("/api/user", userRoutes);
module.exports = app;