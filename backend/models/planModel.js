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
    progress: {
        type: Number,
        required: false
    },
    startDate: {
        type: Number,
        required: true
    },
    endDate: {
        type: Number,
        requried: true
    },
    seed: {
        type: Number,
        default: Math.floor(Math.random()*100)
    },
    plant: {
        type: String,
        default: ["Bushy","Dragon","Pilea","Zamia"][Math.floor(Math.random()*4)]
    },
    todo: {
        type: [String],
        default: []
    },
    owner: {
        type: String,
        required: true
    }
},{timestamps: false})

module.exports = mongoose.model('Plan', planSchema)