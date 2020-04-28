"use strict";

var express = require("express");

var bcrypt = require("bcrypt");

var jwt = require("jsonwebtoken");

var User = require("../models/user");

var router = express.Router(); //* api/user/register

router.post("/register", function (req, res, next) {
  bcrypt.hash(req.body.password, 10).then(function (hash) {
    var user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash
    });
    console.log("this is user that is created: ");
    console.log(user); //! we get right user here!

    user.save().then(function (result) {
      res.status(201).json({
        message: "user created!",
        result: result
      });
    });
  }).catch(function (err) {
    res.status(500).json({
      error: err
    });
  });
}); //* api/user/login

router.post("/login", function (req, res, next) {
  var fetchedUser;
  User.findOne({
    email: req.body.email
  }).then(function (user) {
    if (!user) {
      return res.status(401).json({
        message: "auth failed"
      });
    }

    fetchedUser = user;
    return bcrypt.compare(req.body.password, user.password);
  }).then(function (result) {
    if (!result) {
      return res.status(401).json({
        message: "auth failed"
      });
    }

    var token = jwt.sign({
      email: fetchedUser.email,
      userId: fetchedUser._id
    }, "secret_hehe", {
      expiresIn: "1h"
    });
    res.status(200).json({
      token: token,
      expiresIn: 3600,
      userId: fetchedUser._id,
      username: fetchedUser.username
    });
  }).catch(function (err) {
    return res.status(401).json({
      message: "auth failed in catch block"
    });
  });
});
module.exports = router;