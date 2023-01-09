const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
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
        default: "To Do"
    },
    date: {
        type: Date,
        default: Date.now
    },
    dueDate: {
        type: Number,
        required: false
    },
    ofPlan: {
        type: String,
        required: true
    }
},{timestamps: false})

module.exports = mongoose.model('ToDo', todoSchema)