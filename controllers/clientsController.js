const Campaign = require('../models/campaignModel')

exports.getRegisterClient = async(req, res) => {
    res.render('client/register')
}

exports.getMyPlan = async (req, res) => {
    try{
        const clientId = req.session.user.id
    const myplan = await Campaign.find({clientId, payment_done: "no"})
    
    console.log(myplan)

    if(myplan.length === 0) {
        res.send("<h1>You have not created any plans yet. Create your plan <a href = '/campaignregister'>here</a> and take your business to the next level.")
    }
    
    res.render('client/myplan', {
        myplan: myplan
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
