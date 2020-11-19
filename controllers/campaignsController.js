const Campaign = require('../models/campaignModel')

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

exports.createCampaign = async (req, res) => {
    try{

        const whatsapp_no = req.body.whatsapp_no
        const company_name = req.body.company_name
        const website = req.body.website
        const position = req.body.position
        const category = req.body.category
        const facebook_marketing = req.body.facebook_marketing
        const linkedin_marketing = req.body.linkedin_marketing
        const instagram_marketing = req.body.instagram_marketing
        const email_marketing = req.body.email_marketing
        const seo = req.body.seo
        const smo = req.body.smo
        const image = req.file
        // const image_url = image.path
        const clientId = req.session.user.id
        // let total = parseInt(facebook_marketing)  + parseInt(linkedin_marketing)  + parseInt(instagram_marketing)  + parseInt(email_marketing)  + parseInt(seo)  + parseInt(smo) 
        
        const newCampaign =  await Campaign.create(req.body)
        
        console.log(req.body)
        console.log(newCampaign)
        res.send("<h1>Campaign created successfully. Go and see your plan <a href = '/myplan'>here.</h1>")
        
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
            area: area
        })
    }
    

    catch(err) {
        console.log(err)
    }

}
