const express = require('express')
const router = express.Router()

const campaignController = require('../controllers/campaignsController')
const authController = require('../controllers/auth')

router.post('/campaignregister-custom', campaignController.createCustomCampaign)

router.post('/campaignregister-auto', campaignController.createAutoCampaign)

router.get('/campaignregister-custom', authController.mustBeLoggedIn, campaignController.getCampaign)

router.get('/campaignregister-auto', authController.mustBeLoggedIn, campaignController.getAutoCampaign)


router.get('/registeraffiliate', (req, res) => {
    res.render('client/register')
})


module.exports = router;