const asyncHandler = require('../middleware/async-handler');
const Task = require('../model/task');

// GET ALL TASK
const getAllTask = asyncHandler( async (req, res) => {
        const task = await Task.find({})
        res.status(200).json({ task })
    }
)
// To create task
const createTask = asyncHandler(async (req, res) => {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
})
// to get a task by id
const getTaskById = asyncHandler (async (req, res) => {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id: taskID})
        // if there is no task at all
        if(!task){
          return res.status(404).json({ msg: `No task with the id: ${taskID}`}) 
        }
        res.status(200).json({ task })
    
})


const updateTask = asyncHandler (async (req, res) => {
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
})


// Delete by ID
const deleteTask = asyncHandler (async (req, res) => {
        const { id: taskID } = req.params
        const task =  await Task.findOneAndDelete({_id: taskID })
        // If there is no ID to be deleted
        if(!task) {
           return res.status(404).json({msg: `No task with the id: ${taskID}`})
        }
        res.status(200).json({ task })
})



module.exports = {
    getAllTask,
    createTask,
    getTaskById, 
    updateTask,
    deleteTask,
}