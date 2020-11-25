const mongoose = require('mongoose')
const Schema = mongoose.Schema
const campaignSchema = new Schema({
    whatsapp_no: {
        type: Number,
        required: true
    },
    company_name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    website: {
        type: String,
        trim: true
    },
    position: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },

    gst: {
        type: String,
        
        trim: true
    },
    fb_days: {
        type: Number,
        trim: true,
        
        default:0
    },
    fb_price_per_day: {
        type: Number,
        trim: true,
        
        default:0
    },
    facebook_marketing: {
        type: Number,
        trim: true,
        
        default:0
    },

    insta_days: {
        type: Number,
        trim: true,
        
        default:0
    },
    insta_price_per_day: {
        type: Number,
        trim: true,
        
        default:0
    },
    instagram_marketing: {
        type: Number,
        trim: true,
        
        default:0
    },

    link_days: {
        type: Number,
        trim: true,
        
        default:0
    },
    link_price_per_day: {
        type: Number,
        trim: true,
        
        default:0
    },
    linkedin_marketing: {
        type: Number,
        trim: true,
        
        default:0
    },
    youtube_days: {
        type: Number,
        trim: true,
        
        default:0
    },
    youtube_price_per_day: {
        type: Number,
        trim: true,
        
        default:0
    },
    youtube_marketing: {
        type: Number,
        trim: true,
        
        default:0
    },
    google_days: {
        type: Number,
        trim: true,
        
        default:0
    },
    google_price_per_day: {
        type: Number,
        trim: true,
        
        default:0
    },
    google_marketing: {
        type: Number,
        trim: true,
        
        default:0
    },
    email_days: {
        type: Number,
        trim: true,
        
        default:0
    },
    email_price_per_day: {
        type: Number,
        trim: true,
        
        default:0
    },
    email_marketing: {
        type: Number,
        trim: true,
        
        default:0
    },
    pin_days: {
        type: Number,
        trim: true,
        
        default:0
    },
    pin_price_per_day: {
        type: Number,
        trim: true,
        
        default:0
    },
    pin_marketing: {
        type: Number,
        trim: true,
        
        default:0
    },
    seo_days: {
        type: Number,
        trim: true,
        
        default:0
    },
    seo_price_per_day: {
        type: Number,
        trim: true,
        
        default:0
    },
    seo_marketing: {
        type: Number,
        trim: true,
        
        default:0
    },
    smo_days: {
        type: Number,
        trim: true,
        
        default:0
    },
    smo_price_per_day: {
        type: Number,
        trim: true,
        
        default:0
    },
    smo_marketing: {
        type: Number,
        trim: true,
        
        default:0
    },
    sms_days: {
        type: Number,
        trim: true,
        
        default:0
    },
    sms_price_per_day: {
        type: Number,
        trim: true,
        
        default:0
    },
    sms_marketing: {
        type: Number,
        trim: true,
        
        default:0
    },

    amount:{
        type: Number,
        trim: true,
    
    },

    totalAmount:{
        type: Number,
        trim: true,
        required: true
    
        
    },

    // image_url: {
    //     type: String,
    //     trim: true
    // },
    clientId: {
        type: Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    },
    payment_done: {
        type: String,
        enum: ['no', 'yes'],
        default: 'no',
        required: true
    }
    // payment_done: {
    //     type: String,
    //     enum: ['no', 'yes'],
    //     default: 'no',
    //     required: true
    // }
}, 
{
    timestamps: true
})

const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign

