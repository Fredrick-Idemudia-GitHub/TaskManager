//router/tasks files

const express = require('express')
const router = express.Router()

const { 
    getAllTasks,
    createTask,
    getTask,
    upDateTask,
    deleteTask,
} = require('../controller/tasks')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(upDateTask).delete(deleteTask)


module.exports = router

