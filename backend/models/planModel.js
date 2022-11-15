const mongoose = require('mongoose')
const Schema = mongoose.Schema

const planSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "To Do",
        required: false
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        requried: true
    },
    comment: {
        type: String,
        required: false
    },
    seed: {
        type: Number,
        default: Math.floor(Math.random()*100)
    },
    plant: {
        type: String,
        default: ["Bushy","Dragon","Pilea","Zamia"][Math.floor(Math.random()*4)]
    }
},{timestamps: false})

module.exports = mongoose.model('Plan', planSchema)