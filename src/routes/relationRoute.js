const express = require('express')
const router = express.Router()
const relationcontroller = require('../controllers/relationcontroller')

router.get('/oneToOne',relationcontroller.oneToOne)
router.get('/oneToMany',relationcontroller.oneToMany)
router.get('/multiModel',relationcontroller.multiModel)

module.exports = router