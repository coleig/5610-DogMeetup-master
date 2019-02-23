const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");
// Load Dog model
const Dog = require("../../models/Dog");

// @route POST api/dogs/adddog
// @desc Register dog
// @access Public
router.post("/register", (req, res) => {

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


module.exports = router;