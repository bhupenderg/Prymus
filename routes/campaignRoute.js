const express = require('express')
const router = express.Router()

const campaignController = require('../controllers/campaignsController')
const authController = require('../controllers/auth')

router.post('/campaignregister-custom', campaignController.createCustomCampaign)

router.post('/campaignregister-auto', campaignController.createAutoCampaign)

router.get('/campaignupdate-custom/:id', authController.mustBeLoggedIn, campaignController.updateCustomCampaign)

router.get('/campaignupdate-auto/:id', authController.mustBeLoggedIn, campaignController.updateAutoCampaign)

router.post('/updatedata-custom', campaignController.updateCustomData)

router.post('/updatedata-auto', campaignController.updateAutoData)

router.get('/campaignregister-custom', authController.mustBeLoggedIn, campaignController.getCampaign)

router.get('/campaignregister-auto', authController.mustBeLoggedIn, campaignController.getAutoCampaign)


router.get('/registeraffiliate', (req, res) => {
    res.render('client/register')
})


// delete and update plans

router.post('/delete-plan', campaignController.deleteAutoPlan)
router.post('/delete-custom-plan', campaignController.deleteCustomPlan)

module.exports = router;