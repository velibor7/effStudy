"use strict";

var mongoose = require("mongoose");

var uniqueValidator = require("mongoose-unique-validator");

var userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  tasks: {
    type: Array,
    default: []
  }
});
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("User", userSchema);