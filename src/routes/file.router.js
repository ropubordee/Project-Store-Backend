// src/router/file.router.js
const express = require('express');
const router = express.Router();
const fileController = require('../controllers/file.controller');

router.get('/readFile', fileController.getFileContent);
router.get('/writeFile', fileController.writeToFile);
router.get('/removeFile', fileController.removeFile);
router.get('/fileExists', fileController.fileExists);
router.get("/createPdf", fileController.createPdf);
router.get('/readExcel', fileController.readExcel);


module.exports = router;