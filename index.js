const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const logger = require("./middleware/logger");
const cross = require("./middleware/cross");
const dbURL = require("./config/keys").mongoURL;

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
