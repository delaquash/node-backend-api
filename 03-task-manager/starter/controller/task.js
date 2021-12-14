const getAllTask = (req, res) => {
    res.send('All Items');
}

const createTask = (req, res) => {
    res.send('Create task')
}

const getTask =(req, res) => {
    res.send('Get task')
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