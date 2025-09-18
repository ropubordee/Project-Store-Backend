const express = require("express");
const router = express.Router();
const notandisNullController = require("../controllers/not-isNullcontroller");

router.get("/notNull", notandisNullController.notNull);
router.get("/isNull", notandisNullController.isNull);

module.exports = router;
