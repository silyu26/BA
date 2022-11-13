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
        res.status(200).json(todo)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
const getAllFinished = async (req,res) => {
    try {
        const todo = await ToDo.findOne({statue: "Finished"}).sort({date: -1})
        res.status(200).json(todo)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
const getAllUnfinished = async (req,res) => {
    try {
        const todo = await ToDo.find({statue: "To Do"}).sort({date: -1})
        res.status(200).json(todo)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
const getAllDoing = async (req,res) => {
    try {
        const todo = await ToDo.find({statue: "Doing"}).sort({date: -1})
        res.status(200).json(todo)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
const changeStatueFinished = async (req,res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) { // check if the input id is valid
        return res.status(404).json({error: "no such todo"}) //remember to use return in if to end 
    }
    try {
        const todo = await ToDo.findOneAndUpdate({_id: id}, {
            statue: "Finished"
        })
        res.status(200).json(todo)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
const changeStatueDoing = async (req,res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) { // check if the input id is valid
        return res.status(404).json({error: "no such todo"}) //remember to use return in if to end 
    }
    try {
        const todo = await ToDo.findOneAndUpdate({_id: id}, {
            statue: "Doing"
        })
        res.status(200).json(todo)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {
  createToDo,
  getAllToDo,
  getAllDoing,
  getAllFinished,
  getAllUnfinished,
  changeStatueFinished,
  changeStatueDoing
}