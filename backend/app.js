// const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// const postsRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");
// H!F7QjybjpcfMCN;
const app = express();

// todo: gitignore this file
mongoose
  .connect(
    "mongodb+srv://wony:H!F7QjybjpcfMCN@effstudy-epsrv.mongodb.net/effStudy?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("SUCCESSFUL DB CONNECTION");
  })
  .catch(() => {
    console.log("FAILED DB CONNECTION");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/user", userRoutes);

module.exports = app;
