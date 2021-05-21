const express = require("express"),
      router = express.Router();

const userController = require("../controllers/users_controller");

// GET USERS
router.get("/", userController.getUsers);

// GET A USER
router.get("/:id", userController.getAUser);

// GET FIRST N AMOUNT OF USERS
router.get("/first/:n", userController.getFirstNAmountOfUsers);

// CREATE USER
router.post("/", userController.createUser);

// UPDATE USER
router.put("/:id", userController.updateUser);

// DELETE USER
router.delete("/:id", userController.deleteUser);

module.exports = router;