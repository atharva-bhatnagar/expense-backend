const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router
  .route("/")
  .get(userController.getOneUser)
  .post(userController.createNewUser)
  .patch(userController.updateUser);

module.exports = router;
