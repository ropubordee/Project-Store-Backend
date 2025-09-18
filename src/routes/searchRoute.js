const express = require('express')
const router = express.Router()
const searchControlloer = require('../controllers/searchcontroller')

router.post('/search', searchControlloer.BookSearch)
router.post('/startstWith',searchControlloer.BookStartstWith)
router.post('/endsWith',searchControlloer.BookEndsWith)


module.exports = router