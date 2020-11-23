const Campaign = require('../models/campaignModel')
const AutoCampaign = require('../models/autoPlanModel')

const Client = require('../models/clientModel')

exports.doesNameExist = function(req, res) {

    // let client = Client.findOne({name: req.body.name})
    // .then((response) => {
    //     res.json(true)
    // })
    // .catch(() => {
    //     res.json(false)
    //})
    
}

exports.getRegisterClient = async(req, res) => {
    res.render('client/register', {
        errors: req.flash('errors')
    })
}

exports.getMyAutoPlan = async (req, res) => {
    try{
        const clientId = req.session.user.id
    const myplan = await AutoCampaign.find({clientId, payment_done: "no"})
    
    //console.log(myplan)

    if(myplan.length === 0) {
        return res.send("<h1>You have not created any plans yet. Create your plan <a href = '/campaignregister'>here</a> and take your business to the next level.")
    }
    
    res.render('client/myplan', {
        myplan
    })
    }
    catch(err) {
        console.log(err)
    }
    
}


exports.getMyCustomPlan = async (req, res) => {
    try{
        const clientId = req.session.user.id
    const myplan = await Campaign.find({clientId, payment_done: "no"})
    
    //console.log(myplan)

    if(myplan.length === 0) {
        return res.send("<h1>You have not created any plans yet. Create your plan <a href = '/campaignregister'>here</a> and take your business to the next level.")
    }
    
    res.render('client/mycustomplan', {
        myplan
    })
    }
    catch(err) {
        console.log(err)
    }
    
}







// payments

exports.payments = function(req, res) {
    res.send("<h1>Payment gateway comimg soon!<h1>")
}

//myaccount

exports.myaccount = function(req, res) {
    res.render('client/myaccount')
}

//verification email

exports.isVerified = async function(req, res) {
    try{
        let email = req.body.email
        const client = await Client.findOneAndUpdate({email}, {confirmation: true})
        console.log(client.confirmation)
    }
    catch(err) {
        console.log(err)
    }
}
