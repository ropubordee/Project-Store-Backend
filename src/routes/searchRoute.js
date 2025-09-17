const express = require('express')
const router = express.Router()
const searchControlloer = require('../controllers/searchcontroller')

router.post('/search', searchControlloer.BookSearch)


module.exports = router