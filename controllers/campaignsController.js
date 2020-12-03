const Campaign = require('../models/campaignModel')
const AutoCampaign = require('../models/autoPlanModel')

// states and cities

// const area = {
//     country: "India",
//     zone: ["East", "West", "North", "South"],
//     states: {
//       East:["Chattisgarh", "Jharkhand", "Odisha", "Sikkim", "West Bengal"],
//       West:["Goa", "Gujrat", "Maharashtra", "Rajasthan"],
//       North:["Delhi", "HAryana", "Jammu & Kashmir", "Himachal Pradesh", "Uttar Pradesh", "Punjab", "Uttarakhand"],
//       South:["Andhra Pardesh", "Karnataka", "Kerala", "Lakshadweep", "Tamil Nadu", "Telangana"]
//     }
// }
  

  // area ends

exports.createAutoCampaign = async (req, res) => {

    try{
        const whatsapp_no = req.body.whatsapp_no
        const company_name = req.body.company_name
        const website = req.body.website
        const position = req.body.position
        const category = req.body.category
        const gst = req.body.gst
        // const facebook_marketing = req.body.facebook_marketing
        // const linkedin_marketing = req.body.linkedin_marketing
        // const instagram_marketing = req.body.instagram_marketing
        // const email_marketing = req.body.email_marketing
        // const seo = req.body.seo
        // const smo = req.body.smo
        // const image = req.file
        // const image_url = image.path
        const clientId = req.session.user.id
        const select_days = req.body.select_days
        const amount = req.body.amount
        let serviceCharge = parseInt(amount) * 10/100
        let complete = parseInt(amount) + parseInt(serviceCharge)
        let gst_val = parseInt(complete) * 18/100
        const totalAmount = parseInt(complete) + parseInt(gst_val)
        // let total = parseInt(facebook_marketing)  + parseInt(linkedin_marketing)  + parseInt(instagram_marketing)  + parseInt(email_marketing)  + parseInt(seo)  + parseInt(smo) 
        
        const newCampaign =  await AutoCampaign.create({
            whatsapp_no,
            company_name,
            website,
            position,
            category,
            gst,
            amount,
            select_days,
            clientId,
            totalAmount
        })
        
        console.log(req.body)
        console.log(newCampaign)
        res.send("<h1>Campaign created successfully. Go and see your plan <a href = '/myplan'>here.</h1>")
        
    }
        
    catch(err) {
        res.send("Click on Show Total Amount.")
            // status: "Fail",
            // msg: err
        
        console.log(err)
    }
}  

exports.createCustomCampaign = async (req, res) => {
    try{

        const whatsapp_no = req.body.whatsapp_no
        const company_name = req.body.company_name
        const website = req.body.website
        const position = req.body.position
        const category = req.body.category
        // const facebook_marketing = req.body.facebook_marketing
        // const linkedin_marketing = req.body.linkedin_marketing
        // const instagram_marketing = req.body.instagram_marketing
        // const email_marketing = req.body.email_marketing
        // const seo = req.body.seo
        // const smo = req.body.smo
        const gst = req.body.gst
        const fb_days = req.body.fb_days
        const fb_price_per_day = req.body.fb_price_per_day
        const facebook_marketing = req.body.facebook_marketing || 0


        // const fb_days = req.body.fb_days
        // const fb_price_per_day = req.body.fb_price_per_day
        // const facebook_marketing = req.body.facebook_marketing


        const insta_days = req.body.insta_days
        const insta_price_per_day = req.body.insta_price_per_day
        const instagram_marketing = req.body.instagram_marketing || 0


        const link_days = req.body.link_days
        const link_price_per_day = req.body.link_price_per_day
        const linkedin_marketing = req.body.linkedin_marketing || 0


        const youtube_days = req.body.youtube_days
        const youtube_price_per_day = req.body.youtube_price_per_day
        const youtube_marketing = req.body.youtube_marketing || 0


        const google_days = req.body.google_days
        const google_price_per_day = req.body.google_price_per_day
        const google_marketing = req.body.google_marketing || 0


        const email_days = req.body.email_days
        const email_price_per_day = req.body.email_price_per_day
        const email_marketing = req.body.email_marketing || 0


        const pin_days = req.body.pin_days
        const pin_price_per_day = req.body.pin_price_per_day
        const pin_marketing = req.body.pin_marketing || 0


        const seo_days = req.body.seo_days
        const seo_price_per_day = req.body.seo_price_per_day
        const seo_marketing = req.body.seo_marketing || 0


        const smo_days = req.body.smo_days
        const smo_price_per_day = req.body.smo_price_per_day
        const smo_marketing = req.body.smo_marketing || 0


        const sms_days = req.body.sms_days
        const sms_price_per_day = req.body.sms_price_per_day
        const sms_marketing = req.body.sms_marketing || 0

        // const image = req.file
        // const image_url = image.path
        const clientId = req.session.user.id
        let amount = parseInt(facebook_marketing) + parseInt(instagram_marketing) + parseInt(linkedin_marketing) + parseInt(pin_marketing) + parseInt(google_marketing) + parseInt(email_marketing) + parseInt(youtube_marketing) + parseInt(seo_marketing) + parseInt(smo_marketing) + parseInt(sms_marketing)
        

        // let amount = parseInt(facebook_marketing) + parseInt(instagram_marketing) + parseInt(linkedin_marketing) + parseInt(pin_marketing) + + parseInt(google_marketing)
        let serviceCharge = parseInt(amount) * 10/100
        let complete = parseInt(amount) + parseInt(serviceCharge)
        let gst_val = parseInt(complete) * 18/100
        const totalAmount = parseInt(complete) + parseInt(gst_val)
        // let total = parseInt(facebook_marketing)  + parseInt(linkedin_marketing)  + parseInt(instagram_marketing)  + parseInt(email_marketing)  + parseInt(seo)  + parseInt(smo) 
        
        const newCampaign =  await Campaign.create({
        whatsapp_no,
        company_name,
        website,
        position,
        category,
        gst,
        fb_days,
        fb_price_per_day,
        facebook_marketing,
        link_days,
        link_price_per_day,
        linkedin_marketing,
        insta_days,
        insta_price_per_day,
        instagram_marketing,
        pin_days,
        pin_price_per_day,
        pin_marketing,
        google_days,
        google_price_per_day,
        google_marketing,
        youtube_days,
        youtube_price_per_day,
        youtube_marketing,
        email_days,
        email_price_per_day,
        email_marketing,
        seo_days,
        seo_price_per_day,
        seo_marketing,
        smo_days,
        smo_price_per_day,
        smo_marketing,
        sms_days,
        sms_price_per_day,
        sms_marketing,
        clientId,
        amount,
        totalAmount
        })
        
        console.log(req.body)
        console.log(newCampaign)
        res.send("<h1>Campaign created successfully. Go and see your plan <a href = '/mycustomplan'>here.</h1>")
        
    }

    catch(err) {
        res.send(err)
            // status: "Fail",
            // msg: err
        
        console.log(err)
    }

}

exports.getCampaign = async(req, res) => {
    try{
        const campaigns = await Campaign.find()
        res.render('custom-campaign-register', {
            
        })
    }
    

    catch(err) {
        console.log(err)
    }

}


exports.getAutoCampaign = async(req, res) => {
    try{
        const campaigns = await Campaign.find()
        res.render('auto-campaign-register', {
            // area: area
        })
    }
    

    catch(err) {
        console.log(err)
    }

}


exports.deleteAutoPlan = async(req, res) => {

    try{
        const campaigns = await AutoCampaign.findByIdAndRemove(req.body.delete)
        console.log(campaigns)
    res.send("Plan deleted successfully")
    }

    catch(err) {
        console.log(err)
    }
    
    

}


exports.deleteCustomPlan = async(req, res) => {

    try{
        const campaigns = await Campaign.findByIdAndRemove(req.body.delete)
        console.log(campaigns)
    res.send("Plan deleted successfully")
    }

    catch(err) {
        console.log(err)
    }
    
    

}