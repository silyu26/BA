const ToDo = require('../models/todoModel') 
const mongoose = require('mongoose')

const createToDo = async (req,res) => {
    const {title, content, comment, statue} = req.body //set the req.body that's to be sent and remember to send it in raw JSON format

    try {
        const todo = await ToDo.create({title, content, comment, statue})
        res.status(200).json(todo)// notice todo object does not require to be in brackets  
    } catch (error) { //very important to add (error), otherwise is error undefined and could not be used in Homejs
        res.status(400).json({error: error.message})
    }
}
const getAllToDo = async (req,res) => {
    try {
        const todo = await ToDo.find({}).sort({statue: -1})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
  createToDo,
  getAllToDo
}