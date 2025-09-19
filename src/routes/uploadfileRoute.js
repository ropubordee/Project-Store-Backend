const express = require("express");
const router = express.Router();
const uploadFIleController = require("../controllers/uploadfilecontroller");

router.post("/testUpload", uploadFIleController.uploadFileController);

module.exports = router;
