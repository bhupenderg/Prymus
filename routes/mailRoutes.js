const express = require('express')
const router = express.Router()
const mailController = require('../controllers/mailControllers')

router.post('/website-health', mailController.getHealth)
router.post('/contact', mailController.getContact)
router.post('/careers', mailController.careers)

module.exports = router