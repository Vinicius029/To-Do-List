const express = require('express');
const tasksController = require('./controllers/tasksController');

const router = express.Router();
router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksController.addTask);

module.exports = router;