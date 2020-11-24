const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs');


const Schema = mongoose.Schema
const clientSchema = new Schema({
     name: {
         type: String,
         required: [true, 'Name is missing'],
         trim: true
     },
     email: {
        type: String,
        required: [true, 'Email address is missing'],
        trim: true,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
     },
     password: {
        type: String,
        required: [true, 'Password is missing'],
        minlength: 8,
        select: false
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Confirm Password is missing'],
        validate : {
            validator: function(el) {
              return el === this.password
            },
            message: "Password is not matching"
        }
    },

    phone:{
        type: Number,
        required: [true, "Phone No. is missing"],
        trim: true,
        minlength: 10,
        maxlength: 10
    },
    city:{
        type: String,
        required: [true, "City is missing"],
        trim: true
    },
    state:{
        type: String,
        required: [true, "State is missing"],
        trim: true
    },
    pincode:{
        type: Number,
        required: [true, "Pincode is missing."],
        trim: true
    },
    country:{type: String,
        required: [true, "Country is missing"],
        trim: true},
    confirmation:{
        type: Boolean,
        default: false
    },
    
    termsandconditionsRetailer: {
        type: String,
        required: [true, 'Must check terms and condition Box']
    }

},
{
    timestamps: true
})

clientSchema.pre('save', async function(next) {
    // only works if password is modified
    if(!this.isModified('password')) {
            return next()
    }
    

    // hash with the cost of 12
    this.password = await bcrypt.hash(this.password, 12)
    // denying password confirm to get enter into mongodb
    this.passwordConfirm = undefined;
    next();
})

clientSchema.methods.correctPassword = async function(candidatePassword, clientPassword) {
    return await bcrypt.compare(candidatePassword, clientPassword)
}


const Client = mongoose.model('Client', clientSchema)

module.exports = Client;