const express = require('express')
const router = express.Router()
const bookController = require('../controllers/bookController')

router.get('/list',bookController.getBookList)
router.post('/create',bookController.createBook)
router.put('/update/:id',bookController.updateBook)
router.delete('/remove/:id',bookController.removeBook)

module.exports = router