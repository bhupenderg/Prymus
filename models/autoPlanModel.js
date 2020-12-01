const mongoose = require('mongoose')
const Schema = mongoose.Schema
const autoPlanSchema = new Schema({
    whatsapp_no: {
        type: Number,
        required: true,
        trim: true
    },
    company_name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    website: {
        type: String,
        trim: true,
        
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
    amount: {
        type: Number,
        required: true,
        trim:true
    }, 

    select_days: {
        type: Number,
        required: true,
        trim: true
    },

    image_url: {
        type: String,
        trim: true
    },
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
    },
    totalAmount: {
        type: Number,
        trim: true,
        required: true

    }
}, 
{
    timestamps: true
}
)

const Campaign = mongoose.model('AutoCampaign', autoPlanSchema);

module.exports = Campaign

