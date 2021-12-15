const Task = require('../model/task');

const getAllTask = (req, res) => {
    res.send('All Items');
}

const createTask = async (req, res) => {

    try {
        const task = await Task.create(req.body)
        res.status(202).json({ task })
    } catch (error) {
        res.status(500).json({ msg : error })
    }
    
}
const getTask = (req, res) => {
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