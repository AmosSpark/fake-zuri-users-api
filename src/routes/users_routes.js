const express = require("express"),
      router = express.Router();

const userController = require("../controllers/users_controller");

// CREATE USER
router.post("/", userController.createUser);

module.exports = router;