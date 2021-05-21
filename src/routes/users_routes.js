const express = require("express"),
      router = express.Router();

const userController = require("../controllers/users_controller");

// CREATE USER
router.post("/", userController.createUser);

// UPDATE USER
router.put("/:id", userController.updateUser);

// DELETE USER
router.delete("/:id", userController.deleteUser);

module.exports = router;