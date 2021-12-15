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
const getTask = async (req, res) => {
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
    res.json({ id: req.params.id })
}


const updateTask = (req, res) => {
    res.send('Update Task')
}

const deleteTask = (req, res) => {
    res.send('Delete Task')
}

module.exports = {
    getAllTask,
    createTask,
    getTask, 
    updateTask,
    deleteTask
}