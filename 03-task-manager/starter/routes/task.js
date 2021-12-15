const express = require ('express');
const router = express.Router();
const { getAllTask, getTaskById, createTask, updateTask, deleteTask }= require('../controller/task');

// combined route for task
router.route('/').get(getAllTask).post(createTask);
router.route('/:id').get(getTaskById).patch(updateTask).delete(deleteTask);

module.exports = router
