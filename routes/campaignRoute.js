const express = require('express')
const router = express.Router()

const campaignController = require('../controllers/campaignsController')
const authController = require('../controllers/auth')

router.post('/campaignregister-custom', campaignController.createCampaign)

router.get('/campaignregister-custom', authController.mustBeLoggedIn, campaignController.getCampaign)


router.get('/registeraffiliate', (req, res) => {
    res.render('client/register')
})


module.exports = router;