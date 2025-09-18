const express = require("express");
const router = express.Router();
const booksortcontroller = require("../controllers/bookSortController");

router.get("/orderBy", booksortcontroller.Orderby);
router.get("/gt", booksortcontroller.Ordergt);
router.get("/lt", booksortcontroller.Orderlt);
router.get("/betwenn", booksortcontroller.Orderbetwenn);

module.exports = router;
