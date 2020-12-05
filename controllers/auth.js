//const jwt = require('jsonwebtoken')
const Client = require('../models/clientModel')
const bcrypt = require('bcryptjs');
var postmark = require("postmark");
//var client = new postmark.Client("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");
var client = new postmark.Client("8ad78ad2-5fdb-457f-b1d9-6bd2d2ba3c85");
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')
//const key = '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'

const transporter = nodemailer.createTransport(sendgridTransport({
    
    auth: {
            // api_key: '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',
               api_key: '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'
    }
}))

exports.signup = async (req, res) => {

    const errorVal = []
    try{
        

        const newClient = await Client.create(req.body)

        
        
        if(!newClient){
            return console.log(res.status(400).json({
                status: "Fail",
                data: {
                    msg: "You are already registered. Login to proceed!",
                    client: newClient
                }
            }))
            // console.log("Hello")
            // return res.send("You are already registered. Login to proceed.")
        }

        console.log("test1")
        
            const mailed = await transporter.sendMail({
    

            to: req.body.email,
            from: 'info@prymus.co.in',
            subject: 'You are Successfully Registered with Us 👏',
            html: `<td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
            <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:100% !important; width:100%; height:auto !important;" width="600" alt="" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/247288e1af428f2a/5947ccfd-0d26-4304-8552-4296679d01f6/4723x1740.png">
          </td>
          <br>
                <div><h1style="text-align: center"><span style="font-size: 24px; font-family: &quot;arial black&quot;, helvetica, sans-serif"><strong>Dear ${req.body.name} </h1> </div>
                </br>
                <br><div><h2>Thank you for registering with us!!!</h2></div></br>             
                <br><div><p>Click here to <a href = "https://www.prymus.co.in/registerclient" target="_blank">login</a> into your account.</p></div></br>
                <div><p>You can now begin your <span style = "font-weight: 600;"> Advertising Journey </span> with <span style = "font-weight: 600; color: blue;"> PRYMUS BRANDCOM INDIA PVT LTD! </span></p></div>
                </div>
            `
            
          

        })

        if(!mailed){
            console.log("Fail")
        }

        else{
            console.log("Success")
        }

        console.log("test2")

    

        // isVerified()

        //  -----------postmark ----------------
        // client.sendEmail({
        //     "From": "info@websitemela.com", 
        //     "To": "i.bhupendr@gmail.com", 
        //     "Subject": "Test", 
        //     "TextBody": "Test Message",
        // }, function(error, success) {
        //     if(error) {
        //         console.error("Unable to send via postmark: " + error.message);
        //         return;
        //     }
        //     console.info("Sent to postmark for delivery")
        // });

       // -----------------postmark----------------

            return res.status(200).send("<h1 style = 'color: green;'>You are successfully registered with us. Please <a href = '/registerclient'>login</a> to proceed.</h1>")
    //         req.session.user = {username: client.name, email: client.email, id: client._id}

    //         req.session.save(function() {
    //             res.redirect('/myaccount')
    //         })

    }
    catch(err){

        console.log(err)
        
        res.send("You are already registered with us. Try login")
    }
        

    }

    


    // send email

    
    



// const isVerified = async function(req, res) {
//     try{
//         let _id = ObjectId("5f97b8eeab7c1371542d50be")
//         const client = await Client.findOneAndUpdate({_id}, {confirmation: true})
//         console.log(client.confirmation)
//     }
//     catch(err) {
//         console.log(err)
//     }
// }

exports.login = async (req, res, next) => {

    try{
        const email = req.body.email
        const password = req.body.password
    
        if(!email || !password){
            // return next(new Error("Please provide email and password"))

            return res.send("Please provide valid email and password to login.")
        }
    
        const client = await Client.findOne({email: email}).select('+password')
    
        console.log(client)
        if(!client){
            return res.status(400).send("You are not registered ")
        }
    
        const comaparePassword = await bcrypt.compare(password, client.password)
    
        console.log(comaparePassword)
    
        if(!comaparePassword){
            return res.status(400).send("Please provide valid email and password")
        }
        
        // if(client.confirmation === false) {
        //     return res.status(400).send("Please verify your email first before first login")
        // }   
        
        // sessions starts

        req.session.user = {username: client.name, email: client.email, id: client._id}

        req.session.save(function() {
            res.redirect('/myaccount')
        })        
    
    }
    catch(err) {
        res.send(err)
    }
    
}



    

//     const client = await Client.findOne({email})
//     //.select('+password')

//     if(!client) {
//       return res.status(400).json({
//             status: "Fail",
//             msg: "Invalid email or password"
//         })
//     }

//     bcrypt
//     .compare(password, client.password)
//     .then((result) => {
//         if(!result){
//             return res.status(400).send("It sucks again!")
//         }

//             res.status(200).json({
//                 status: "Success",
//                 msg:result
//             })
//     })
    
//     .catch((err) => {
//         res.status(401).json({
//             status: "Fail",
//             msg: err
//         })
//     })
// }

exports.mustBeLoggedIn = function(req, res, next) {
    if(req.session.user) {
        next()
    }

    else{
        res.redirect('/registerclient')
    }
}

exports.logout = (req, res) => {
    req.session.destroy(function() {
        res.redirect('/registerclient')
    })
}