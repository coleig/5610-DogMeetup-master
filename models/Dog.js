const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DogSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    default: true
  },
  gender: {
    type: String,
    required: true
  }
});

module.exports = Dog = mongoose.model("dogs", DogSchema)