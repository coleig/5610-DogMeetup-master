const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const Dog = require("../../models/Dog");

// @route POST api/dogs/adddog
// @desc Register dog
// @access Public
router.post("/register", (req, res) => {

User.findOne({ email: req.body.email }).then(dog => {
    if (dog) {
      return res.status(400).json({ email: "Email already exists" });
    } 
const newDog = new Dog({
        email: req.body.email,
        name: req.body.name,
        age: req.body.age,
        breed: req.body.breed,
        gender: req.body.gender
      });
      newDog
        .save()
        .then(dog => res.json(dog))
        .catch(err => console.log(err));
  });
});


module.exports = router;