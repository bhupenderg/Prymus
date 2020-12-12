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
    
        if(!mailed){
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
    
        if(!mailed){
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

