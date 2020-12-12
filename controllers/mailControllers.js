const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')
// const key = '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'

const transporter = nodemailer.createTransport(sendgridTransport({
    
    auth: {
        api_key: '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'
    }
}))


exports.getHealth = async (req, res) => {

    try{
        const mailed = await transporter.sendMail({
    

            to: 'rajan.jhanji@gmail.com',
            from: 'info@prymus.co.in',
            subject: 'For Free Website Health Report 👏',
            html: `
                    name: ${req.body.name}<br>
                    email: ${req.body.email}<br>
                    mobile: ${req.body.mobile}<br>
                    wlink: ${req.body.wlink}
    
            `
            
          
    
        })


        const mailedBack = await transporter.sendMail({
    

            to: req.body.email,
            from: 'info@prymus.co.in',
            subject: 'Free Website Health Report',
            html: `
                  <h1>Hello ${req.body.name},</h1><br><br>
                  <h2>Thank you for approaching us 💗</h2>
                  <h2>Our team is analyzing your website ${req.body.wlink}.</h2> 
                  <h2>In the next 48 hours, you will recieve your free website health report.</h2>

                  <h3>Cheers,</h3>
                  <h3>Team Prymus</h3>
    
            `
            
          
    
        })


        
    
        if(!mailedBack){
            console.log("Something wrong")
        }
    
        else{
            console.log("Everything good")
        }
        res.send(`<h1>Your query is submitted successfully. We will get back to you shortly.</h1>`)
    
    }

    catch(err) {
        res.send(err)
    }

    }

exports.careers = (req, res) => {
    res.send(`<h1>Your query is submitted successfully. We will get back to you shortly.</h1>`)
}

exports.getContact = (req, res) => {
    res.send(`<h1>Your query is submitted successfully. One of our representative will get back to you shortly.</h1>`)
}

exports.getNewsletter = async (req, res) => {

    try{
        const mailed = await transporter.sendMail({
    

            to: 'rajan.jhanji@gmail.com',
            from: 'info@prymus.co.in',
            subject: 'For monthly newsletter',
            html: `
                    
                    email: ${req.body.email}<br>
                   
    
            `
            
          
    
        })

        const mailedBack = await transporter.sendMail({
    

            to: req.body.email,
            from: 'info@prymus.co.in',
            subject: 'Newsletter Subscription',
            html: `
                  
                  <h2>Yay!!! You have just signed up for our newsletter subscription 💌</h2>
                  <h2>We will soon be sending you our newsletters here.</h2> 
                  

                  <h3>Cheers,</h3>
                  <h3>Team Prymus</h3>
    
            `
            
          
    
        })
    
        if(!mailedBack){
            console.log("Something wrong")
        }
    
        else{
            console.log("Everything good")
        }
        res.send(`<h1>Thanks for subscribing to our newsletter.</h1>`)
    
    }

    catch(err) {
        res.send(err)
    }

    
    
}

