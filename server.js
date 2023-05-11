const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path")

const app = express();

app.listen(4000, () => console.log(`server running on 4000`));

app.use(express.static(`${__dirname}/public`));

//middleware
app.use(express.json());
app.use(cors());

const {ROLLBAR_ACCESS_TOKEN} = process.env;

// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: `${ROLLBAR_ACCESS_TOKEN}`,
  captureUncaught: true,
  captureUnhandledRejections: true,
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

// create an endpoint

try {
    app.get('/', fakeFuncion);
  } catch (error) {
    rollbar.error(error);
   
  }
