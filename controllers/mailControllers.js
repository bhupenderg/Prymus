const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')
const key = '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'

const transporter = nodemailer.createTransport(sendgridTransport({
    
    auth: {
        api_key: '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',
        // api_key: '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'
    }
}))

// exports.getHealth = async (req, res) => {
    
//     try{

//         const output = `
        
//         <h1>You have a new request for website health check.</h1>
//         <h2>Contact Details: </h2>
//         <ul>
//             <li>Name: ${req.body.name}</li>
//             <li>Email: ${req.body.email}</li>
//             <li>Mobile: ${req.body.mobile}</li>
//             <li>Website Link: ${req.body.wlink}</li>
//         </ul>
//         `


//         console.log(output)
                
//                     const mailed = await transporter.sendMail({
            

//                     to: 'i.bhupendr@gmail.com',
//                     from: req.body.email,
//                     subject: 'Succeeded',
//                     html: '<h1 style = "color: green;"> You have successfully sent your request fot your website health checkup.</h1>'
//                 })

//                 if(!mailed){
//                     console.log("Fail")
//                 }

//                 else{
//                     console.log("Success")

//                     res.send("Wow")
//                 }

//             }
//             catch(err) {
//                 console.log(err)
//             }   

//         }


exports.getHealth = (req, res) => {
    res.send(`<h1>Your query is submitted successfully. We will get back to you shortly.</h1>`)
}

exports.careers = (req, res) => {
    res.send(`<h1>Your query is submitted successfully. We will get back to you shortly.</h1>`)
}

exports.getContact = (req, res) => {
    res.send(`<h1>Your query is submitted successfully. One of our representative will get back to you shortly.</h1>`)
}

exports.getNewsletter = (req, res) => {
    res.send(`<h1>Thanks for subscribing to our newsletter.</h1>`)
}

