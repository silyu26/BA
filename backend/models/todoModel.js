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
    comment: {
        type: String,
        required: false
    },
    statue: {
        type: String,
        default: "To Do"
    },
    date: {
        type: Date,
        default: Date.now
    }
},{timestamps: false})

module.exports = mongoose.model('ToDo', todoSchema)