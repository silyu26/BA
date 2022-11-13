const express = require('express')
const router = express.Router()

const ToDo = require('../models/todoModel')
const {
  createToDo,
  getAllToDo,
  getAllDoing,
  getAllFinished,
  getAllUnfinished,
  changeStatueFinished,
  changeStatueDoing
} = require('../controllers/todoController')

router.post("/",createToDo)
router.get("/",getAllToDo)
router.get("/finished",getAllFinished)
router.get("/doing",getAllDoing)
router.get("/unfinished",getAllUnfinished)
router.patch("/finish/:id",changeStatueFinished)
router.patch("/doing/:id",changeStatueDoing)

module.exports = router