const express = require('express')
const router = express.Router()

const ToDo = require('../models/todoModel')
const {
  createToDo,
  getAllToDo
} = require('../controllers/todoController')

router.post("/",createToDo)
router.get("/",getAllToDo)

module.exports = router