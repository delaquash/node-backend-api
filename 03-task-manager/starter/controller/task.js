const Task = require('../model/task');

// GET ALL TASK
const getAllTask = async (req, res) => {
    try {
        const task = await Task.find({})
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg : error })
    }
}
// To create task
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg : error })
    }
    
}

// to get a task by id
const getTaskById = async (req, res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id: taskID})
        // if there is no task at all
        if(!task){
          return res.status(404).json({ msg: `No task with the id: ${taskID}`}) 
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg : error })
    }
}


const updateTask = async (req, res) => {
    try {
        const {id: taskID} = req.params
        const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
            new:true, 
            runValidators: true
        })

        // if there is no task to update
        if(!task){
            return res.status(404).json({ msg: `No task with the id: ${taskID}`}) 
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({ msg : error })
    }
}


// Delete by ID
const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task =  await Task.findOneAndDelete({_id: taskID })
        // If there is no ID to be deleted
        if(!task) {
           return res.status(404).json({msg: `No task with the id: ${taskID}`})
        }
        res.status(200).json({ task })
    }  catch (error) {
        res.status(500).json({ msg : error })
    }
}

module.exports = {
    getAllTask,
    createTask,
    getTaskById, 
    updateTask,
    deleteTask
}