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

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema)
module.exports = Dog = mongoose.model("dogs", DogSchema)