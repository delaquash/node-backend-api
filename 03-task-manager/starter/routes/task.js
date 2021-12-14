const express = require ('express');
const router = express.Router();
const { getAllTask, getTask, createTask, updateTask, deleteTask }= require('../controller/task');

// combined route for task
router.route('/').get(getAllTask).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);




module.exports = router
