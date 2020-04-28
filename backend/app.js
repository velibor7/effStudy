const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("z8");
});

module.exports = app;
