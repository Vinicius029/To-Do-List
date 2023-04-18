const express = require('express');
const tasksController = require('./controllers/tasksController');
const taksMiddleware = require('./middlewares/tasksMiddleware')

const router = express.Router();
router.get('/tasks', tasksController.getAll);
router.post('/tasks', taksMiddleware.validateFieldTitle, tasksController.addTask);
router.delete('/tasks/:id', tasksController.removeTask);
router.put('/tasks/:id', taksMiddleware.validateFieldTitle, taksMiddleware.validateFieldStatus, tasksController.updateTask);

module.exports = router;