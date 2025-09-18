const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController')

router.get("/createToken", userController.createAuthToken);
router.get("/verifyToken", userController.verifyAuthToken);

module.exports = router;
