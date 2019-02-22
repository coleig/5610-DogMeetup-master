// IMPORTING MODULES
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const session = require("express-session");
// var router = require("./router");
// var router = require("./router.js");
const passport = require("passport");
const users = require("./routes/api/users");


// SETTING APP VARIABLES
const app = express();
app.use(express.static("public"));
// app.use("/router", router);
// app.use(cookieParser());
// app.use(session({ secret: "Shh, its a secret!" }));

// BODY PARSER MIDDLEWARE
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// PASSPORT MIDDLEWARE
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

// DATABASE CONFIGURATIONS
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost/dogmeetup");

// // DATABASE MODEL AND SCHEMA SET UP
// const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;
// // create the dog model and instantiate it
// const dogProfileSchema = new Schema({
//   dog: ObjectId,
//   name: String,
//   breed: String,
//   age: String
// });
// var DogModel = mongoose.model("Dog", dogProfileSchema);
// // create a model and instantiate it  
// const userProfileSchema = new Schema({
//   user: ObjectId,
//   username: String,
//   email: String,
//   password: String,
//   confirmationpassword: String,
//   dogs: [dogProfileSchema]
// });
// var UserModel = mongoose.model("User", userProfileSchema);  

// // SESSION STUFF
// app.get("/", function(req, res) {
//   if (req.session.page_views) {
//     req.session.page_views++;
//     res.send("You visited this page " + req.session.page_views + " times");
//   } else {
//     req.session.page_views = 1;
//     res.send("Welcome to this page for the first time!");
//   }
// });

// // define endpoint for saving login information
// app.post("/registeruser", (req, res) => {
//   var newUserData = new UserModel(req.body); // the user registration data to be saved
//   console.log(req.body.password);
//   console.log(req.body.confirmpassword);

//   // hashing password to store into database
//   bcrypt.hash(req.body.password, 10, function(err, hash) {
//     newUserData.password = hash;
//     // save data in the database
//     newUserData
//       .save()
//       .then(item => {
//         res.send("Name saved to database");

//         // this reports back full contents of the database
//         var stuff = UserModel.find({});
//         console.log(stuff);
//         // var query = UserModel.where({});
//         // query.find(function(err, kitten) {
//         //   if (err) return handleError(err);
//         //   if (kitten) {
//         //     console.log(kitten);
//         //   }
//         // });
//       })
//       .catch(err => {
//         res.status(400).send("Unable to save to database");
//       });
//   });

// });

// // define endpoint for verifying login information
// app.post("/login", (req, response) => {
//   var userLoginData = new UserModel(req.body); // get login data
//   var userEmail = req.body.email;
//   var enteredPassword = req.body.password;

//   // see if this username is in the database
//   var query = UserModel.where({ email: userEmail });
//   query.findOne(function(err, user) {
//     if (err) return handleError(err);
//     if (user) {
//       console.log(user);
//       var password = user.password;
//       console.log(password);
//       bcrypt.compare(enteredPassword, password, function(err, res) {
//         console.log(res);
//         if (res) {
//           // fire up the profile page
//           console.log("we did it");
//         } else {
//           // passwords don't match
//           console.log("we did not do it");
//         }
//       });
//     }
//   });
// });

// // // set the app to listen on port 5000
// // app.listen(port, () => {
// //  console.log("Server listening on port " + port);
// // });