const express = require('express')

const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongodb-session')(session)
const csrf = require('csurf')
const multer = require('multer')
const flash = require('connect-flash')
// var enforce = require('express-sslify');

// Payment Gateway 

var ResMsgDTO = require('./ResMsgDTO.js');
var ReqMsgDTO = require('./ReqMsgDTO.js');
var VtransactSecurity = require('./VtransactSecurity.js');
var HTTPPost = require('./HTTPPost.js');
var AWLMEAPI = require('./AWLMEAPI.js');


const app = express()

// app.use(enforce.HTTPS({ trustProtoHeader: false }));

var bodyParser = require('body-parser')

var reqMsgDTO = new ReqMsgDTO();
var resMsgDTO = new ResMsgDTO();
var transactMeAPI = new AWLMEAPI();
var vTransactSecurity = new VtransactSecurity();
const fs = require('fs');
const ini = require('ini');
const ini_array = ini.parse(fs.readFileSync('./ClientAPI.ini', 'utf-8'));

 // parse application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({ extended: false }))
 
 // parse application/json
 app.use(bodyParser.json())


// // Payment Gateway ends

const port = process.env.PORT || 5800

let path = require('path')

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '/images'))
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png'|| file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
        cb(null, true)
    }

    else{
        cb(null, false)
    }
}


const MongoDB_URI = 'mongodb+srv://prymususermain:prymususermain@test-cluster1.mxenq.mongodb.net/test-cluster1?retryWrites=true&w=majority'
const store = new MongoStore({
   uri: MongoDB_URI,
    collections: 'sessions'
})



app.use(multer({storage: fileStorage, fileFilter: fileFilter}).array('images'))
app.use(flash())

let sessionOptions = session({
    secret: 'prymussiacompanyandjohn-f-kennedyis-notawwestar-likekanetheundertaker',
    store: store,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000*60*60*24,
        httpOnly: true
    } 
})

app.use(sessionOptions)

app.use(express.static('public'))

// all routes
const campaignRoutes = require('./routes/campaignRoute')
const clientRoutes = require('./routes/users/clients/clientRoutes')
const paymentRoutes = require('./routes/paymentsRoute')
const blogsRoutes = require('./routes/blogRoutes')
const mailRoutes = require('./routes/mailRoutes')
//all routes end



app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.set('views', 'views')
app.set('view engine', 'ejs')

app.use(function(req, res, next) {
    res.locals.user = req.session.user
    next()
})

app.use(campaignRoutes)
app.use(clientRoutes)
app.use(paymentRoutes)
app.use(blogsRoutes)
app.use(mailRoutes)

// chat system starts

const server = require('http').createServer(app)
const io = require('socket.io')(server)

io.use(function(socket, next) {
    sessionOptions(socket.request, socket.request.res, next)
})
io.on('connection', function(socket){
    if(socket.request.session.user) {
        let user = socket.request.session.user
        socket.on('chatMessageFromBrowser', function(data) {
            //to only browser which is connected (!io)
            io.emit('chatMessageFromServer', {message: data.message, username: user.username})
        })
    }
})

// chat system ends

app.post('/manager-account', (req, res) => {
    res.send("<h1>We will notify you in next 48-72 hours.</h1><h1>Back to <a href='/'>website</a></h1>")
})

app.post('/comingsoon', (req, res) => {
    res.send("<h1>Our team is working on your account. We will notify you in next 48-72 hours.</h1><h1>Back to <a href='/'>website</a></h1>")
})

app.get('/affiliate-register', (req, res) => {
    res.render('affiliate-register')
})



// app.get('/manager-terms-and-conditions', (req, res) => {
//     res.render('termsandconditionsmanager.ejs')
// })


// app.get('/retailer-terms-and-conditions', (req, res) => {
//     res.render('termsandconditionsretailer.ejs')
// })


app.get('/terms-and-conditions', (req, res) => {
    res.render('termsandconditionsretailer.ejs')
})

// app.get('/services/seo', (req, res) => {
//     res.render('seo')
// })

// app.get('/services/webdesignanddevelopment', (req, res) => {
//     res.render('webdesignanddevelopment')
// })

// app.get('/services/smo', (req, res) => {
//     res.render('smo')
// })


app.get('/contact-us', (req, res) => {
    res.render('contact2')
})

app.get('/contact', (req, res) => {
    res.render('contact2')
})

// app.get('/campaign-register.ejs', (req, res) => {
//     res.render('campaign-register')
// })

app.get('/connect-with-us', (req, res) => {
    res.render('connect-with-us')
})
// app.get('/webdesignanddevelopment', (req, res) => {
//     res.render('webdesignanddevelopment')
// })

// app.get('/seo', (req, res) => {
//     res.render('seo')
// })

// app.get('/smo', (req, res) => {
//     res.render('smo')
// })

app.get('/privacy-policy', (req, res) => {
    res.render('privacy-policy')
})

app.get('/our-services', (req, res) => {
    res.render('our-services')
})

app.get('/our-services/ecommerce-website', (req, res) => {
    res.render('ecommerce-website')
})

app.get('/our-services/portfolio-website', (req, res) => {
    res.render('portfolio-website')
})


app.get('/our-services/content-marketing', (req, res) => {
    res.render('content-marketing')
})

app.get('/our-services/social-media-optimization', (req, res) => {
    res.render('social-media-optimization')
})

app.get('/our-services/app-development', (req, res) => {
    res.render('app-development')
})

app.get('/our-services/email-marketing', (req, res) => {
    res.render('email-marketing')
})

app.get('/our-services/coded-websites', (req, res) => {
    res.render('coded-websites')
})

app.get('/our-services/wordpress-websites', (req, res) => {
    res.render('wordpress-websites')
})

app.get('/our-services/serveranddomain', (req, res) => {
    res.render('server-domain')
})


app.get('/our-services/website-redesign', (req, res) => {
    res.render('redesign-website')
})


app.get('/our-services/paid-advertisement', (req, res) => {
    res.render('paid-advertisement')
})

app.get('/our-services/sms-marketing', (req, res) => {
    res.render('sms-marketing')
})

app.get('/our-services/whatsapp-marketing', (req, res) => {
    res.render('whatsapp-marketing')
})

app.get('/our-services/restricted-photoshoot', (req, res) => {
    res.render('restricted-photoshoot')
})

app.get('/our-services/creative-photoshoot', (req, res) => {
    res.render('creative-photoshoot')
})

app.get('/our-services/digital-brand-designing', (req, res) => {
    res.render('digital-brand-designing')
})

app.get('/our-services/product-package-designing', (req, res) => {
    res.render('product-package-designing')
})

app.get('/our-services/audio-editing', (req, res) => {
    res.render('audio-editing')
})

app.get('/our-services/video-editing', (req, res) => {
    res.render('video-editing')
})


app.get('/career', (req, res) => {
    res.render('career')
})

app.get('/career/digital-marketing-manager', (req, res) => {
    res.render('career/digital-marketing-manager')
})

app.get('/career/photographer', (req, res) => {
    res.render('career/photographer')
})

app.get('/career/telemarketing-representative', (req, res) => {
    res.render('career/telemarketing-representative')
})

app.get('/career/graphic-designer', (req, res) => {
    res.render('career/graphic-designer')
})

app.get('/sitemap.xml', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'sitemap.xml'))
})


app.get('/', (req, res) => {
    res.render('index1')
})



// app.get('/', (req, res) => {
//     res.render('coming-soon')
// })

// app.use('*', (req, res) => {
//     res.send("<h1>Error 404 Page not found!")
// })


mongoose.connect('mongodb+srv://prymususermain:prymususermain@test-cluster1.mxenq.mongodb.net/test-cluster1?retryWrites=true&w=majority', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex:true
  }
)
.then(result => {
    server.listen(port)
})
.catch(err => {
    console.log(err)
})
 //app.listen(3000)