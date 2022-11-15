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
    status: {
        type: String,
        default: "To Do"
    },
    date: {
        type: Date,
        default: Date.now
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

module.exports = mongoose.model('ToDo', todoSchema)