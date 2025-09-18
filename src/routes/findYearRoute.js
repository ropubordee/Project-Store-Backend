const express = require("express");
const router = express.Router();
const findYearcontroller = require("../controllers/findYearcontroller");

router.get("/findYearMonthDay", findYearcontroller.findYearMonthDay);
router.get("/findYearMonth", findYearcontroller.findYearMonth);

module.exports = router;
