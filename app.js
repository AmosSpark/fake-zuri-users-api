const express = require("express");

const app = express();

// Body-Parser Middleware
app.use(express.json()); // handle raw json
app.use(express.urlencoded({extended: false})); // handle form submission

module.exports = app;