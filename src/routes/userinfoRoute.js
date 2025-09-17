const express = require('express')
const router = express.Router()
const userinfocontroller = require('../controllers/userinfoController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/info',authMiddleware,userinfocontroller)

module.exports = router