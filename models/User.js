const mongoose = require("mongoose");

const User = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please enter valid email",
    ],
  },
  cnic: {
    type: Number,
    required: [true, "CNIC is required"],
    unique: true,
    maxlength: [13, "Invalid CNIC number"],
  },
  mobile: {
    type: Number,
    required: [true, "CNIC is required"],
    unique: true,
    maxlength: [11, "Invalid Mobile number"],
  },
  passowrd: {
    type: String,
    required: [true, "Password is required"],
  },
});

module.exports = mongoose.model("User", User);
