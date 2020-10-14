const express = require('express')

const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongodb-session')(session)
const csrf = require('csurf')
const multer = require('multer')
const app = express()

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



app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('image'))

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
// all routes end


var bodyParser = require('body-parser')
 // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.set('views', 'views')
app.set('view engine', 'ejs')

app.use(function(req, res, next) {
    res.locals.user = req.session.user
    next()
})

app.use(campaignRoutes)
app.use(clientRoutes)

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



app.get('/affiliate-register', (req, res) => {
    res.render('affiliate-register')
})





app.get('/services/seo', (req, res) => {
    res.render('seo')
})

app.get('/services/webdesignanddevelopment', (req, res) => {
    res.render('webdesignanddevelopment')
})

app.get('/services/smo', (req, res) => {
    res.render('smo')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/campaign-register.ejs', (req, res) => {
    res.render('campaign-register')
})

app.get('/connect-with-us', (req, res) => {
    res.render('connect-with-us')
})
app.get('/webdesignanddevelopment', (req, res) => {
    res.render('webdesignanddevelopment')
})

app.get('/seo', (req, res) => {
    res.render('seo')
})

app.get('/smo', (req, res) => {
    res.render('smo')
})

app.get('/', (req, res) => {
    res.render('index')
})


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
    server.listen(3000)
})
.catch(err => {
    console.log(err)
})
 //app.listen(3000)