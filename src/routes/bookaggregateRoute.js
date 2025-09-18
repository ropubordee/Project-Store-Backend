const express = require("express");
const router = express.Router();
const bookaggregatecontroller = require("../controllers/bookaggregatecontroller");

router.get("/sum", bookaggregatecontroller.booksum);
router.get("/max", bookaggregatecontroller.bookmax);
router.get("/min", bookaggregatecontroller.bookmin);
router.get("/avg", bookaggregatecontroller.bookavg);

module.exports = router;
