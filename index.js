const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const dotenv = require("dotenv");
const path = require("path");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const logger = require("./middleware/logger");
const cross = require("./middleware/cross");

//Init app
const app = express();

//User routes
const users = require("./Routes/users");

//Load env vars
dotenv.config({ path: "./config/config.env" });

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

//User Routes
app.use("/users", users);

//Default port for NODE app
const PORT = process.env.PORT || 8080;

//Connect to Mongo DB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB is connected"))
  .catch((error) => console.log(error));

//Start Sever
app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
