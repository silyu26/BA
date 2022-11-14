const express = require('express')
const router = express.Router()

const Plan = require('../models/planModel')

const {
    getAllPlan,
    createPlan,
    deletePlan,
    changestatusDoing,
    changestatusFinished
} = require('../controllers/planController')

router.post("/",createPlan)
router.get("/",getAllPlan)
router.delete("/:id",deletePlan)
router.patch("/doing/:id",changestatusDoing)
router.patch("/finish/:id",changestatusFinished)


module.exports = router