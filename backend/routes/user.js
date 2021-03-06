const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const router = express.Router();

//* api/user/register
router.post("/register", (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash,
      });
      console.log("this is user that is created: ");
      console.log(user);
      //! we get right user here!
      user.save().then((result) => {
        res.status(201).json({ message: "user created!", result: result });
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

//* api/user/login
router.post("/login", (req, res, next) => {
  let fetchedUser;
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ message: "auth failed" });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then((result) => {
      if (!result) {
        return res.status(401).json({ message: "auth failed" });
      }
      const token = jwt.sign(
        {
          username: fetchedUser.username,
          userId: fetchedUser._id,
        },
        "secret_hehe",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: fetchedUser._id,
        username: fetchedUser.username,
      });
    })
    .catch((err) => {
      return res.status(401).json({ message: "auth failed in catch block" });
    });
});

module.exports = router;
