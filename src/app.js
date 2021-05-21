const express = require("express");

const cors = require("cors");
const app = express();

// Enable all CORS request
app.use(cors());

// Body-Parser Middleware
app.use(express.json()); // handle raw json
app.use(express.urlencoded({extended: false})); // handle form submission

// ROUTER
require("./startup/startupRouter")(app);

module.exports = app;