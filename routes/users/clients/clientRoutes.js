const express = require('express')
const authController = require('../../../controllers/auth')
const clientsController = require('../../../controllers/clientsController')
const router = express.Router()

//const campaignController = require('../controllers/campaignsController')

router.get('/registerclient', clientsController.getRegisterClient)
router.get('/registermanager', clientsController.getRegisterManager)

//auth

router.post('/registerclient', authController.signup)

router.post('/myaccount', authController.login)

router.post('/forgotPassword', authController.forgotPassword)
router.post('/resetPassword/:token', authController.resetPassword)

router.post('/logout', authController.logout)



//auth

// verfication email

router.put('/isverified', clientsController.isVerified)

// verification email

//router.post('/client-register', campaignController.createCampaign)

//router.get('/client-myaccount', campaignController.getCampaign)

//router.post('/client-create-campaign', (req, res) => {
//     res.send("client registered")
// })

// router.get('/getcustomplan', clientsController.getCustomPlan)

router.get('/myplan', authController.mustBeLoggedIn, clientsController.getMyAutoPlan)
router.get('/mycustomplan', authController.mustBeLoggedIn, clientsController.getMyCustomPlan)
// router.get('/mycustomplan', authController.mustBeLoggedIn, clientsController.getMyCustomPlan)

// Payments

router.get('/payments', authController.mustBeLoggedIn, clientsController.payments)

router.get('/myaccount', authController.mustBeLoggedIn, clientsController.myaccount)

module.exports = router;