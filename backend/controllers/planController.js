const Plan = require('../models/planModel')
const mongoose = require('mongoose')

const getAllPlan = async (req,res) => {
    try {
        const plan = await Plan.find({}).sort({startDate: -1})
        res.status(200).json(plan)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
const createPlan = async (req,res) => {
    const {title, content, status, startDate, endDate, comment} = req.body 

    try {
        const plan = await Plan.create({title, content, status, startDate, endDate, comment})
        res.status(200).json(plan)
    } catch (error) { 
        res.status(400).json({error: error.message})
    }
}
const changestatusDoing = async (req,res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) { 
        return res.status(404).json({error: "no such plan"}) 
    }
    try {
        const plan = await Plan.findOneAndUpdate({_id: id}, {
            status: "Doing"
        })
        res.status(200).json(plan)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
const changestatusFinished = async (req,res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) { 
        return res.status(404).json({error: "no such plan"}) 
    }
    try {
        const plan = await Plan.findOneAndUpdate({_id: id}, {
            status: "Finished"
        })
        res.status(200).json(plan)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
const deletePlan = async (req,res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) { 
        return res.status(404).json({error: "no such plan"}) 
    }
    try {
        const plan = await Plan.findByIdAndDelete({_id: id})
        res.status(200).json(plan)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {
    getAllPlan,
    createPlan,
    changestatusDoing,
    changestatusFinished,
    deletePlan
}