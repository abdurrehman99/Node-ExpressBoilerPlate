const express = require("express");
const router = express.Router();
const { registerUser } = require("../Services/userServices");
//Load User Model
const User = require("../models/User");

router.post("/register", (req, res) => {
  registerUser(req, res);
});

module.exports = router;
