const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const logger = require("./middleware/logger");
const cross = require("./middleware/cross");
const dbURL = require("./config/keys").mongoURL;
const User = require("./models/User");

//Init app
const app = express();

//Body Parser Middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

//Passport middleware
app.use(passport.initialize());

//Initalize logger
app.use(logger);

//Cross Middleware
app.use(cross);

// Sanitize data
app.use(mongoSanitize());

// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

app.post("/signup", (req, res) => {
  const newUser = new User({
    cnic: req.body.cnic,
    email: req.body.email,
    password: req.body.password,
    mobile: req.body.mobile,
  });
  newUser
    .save()
    .then((user) => {
      res.json(user);
      console.log(user);
    })
    .catch((err) => res.send(err));
  res.status(200).send("OK");
});

//Default port for NODE app
const PORT = process.env.PORT || 5000;
//Connect to Mongo DB
mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is connected"))
  .catch((error) => console.log(error));

//Start Sever
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
