// controller/tasks.js file
const Task = require('../models/tasks')

const getAllTasks = async (req, res) => {
    try {
        const task = await Task.find({})
        return res.status(200).json({task})
    } 
    catch (error) {
        res.status(500).json({mgs: error})
    }
}

const createTask = async (req, res) => {
     try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
     } 
     catch(error){
        res.status(500).json({mgs: error})
     }
}

const getTask = async (req, res) => {
    try {
        const {id: taskID} = req.params
        const task = await Task.findOne({_id:taskID});
        if(!task){
            return res.status(404).json({msg: `No record with id: ${taskID}`})
        }
            res.status(200).json({task})
    } 
    catch{
        res.status(500).json({msg: 'error searching database with the id provided'})
    }

    }
    
    const deleteTask = async (req, res) => {
        try {
            const {id: taskID} = req.params
            const task = await Task.findOneAndDelete({_id: taskID})
        if(!task){
            return res.status(404).json({msg: `No record with id: ${taskID}`})
        }
            res.status(200).json({task})
        } 
        catch (error) {
            res.status(500).json({msg: 'error searching database with the id provided'})
        }
}
    const upDateTask = async (req, res) => {
        try {
            const {id: taskID} = req.params
            const task = await Task.findOneAndUpdate({_id:taskID}, req.body,{
                new: true,
                runValidators: true
            })
            if(!task){
                return res.status(404).json({msg: `No record with id: ${taskID}`})
            }
            res.status(200).json({ task })
        } 
        catch (error) {
            res.status(500).json({msg: 'error searching database with the id provided'})
        }
        
    }

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    upDateTask,
    deleteTask
}