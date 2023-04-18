const connection = require('../models/connection');
const tasksModel = require('../models/tasksModel')

const getAll = async (req, res) => {
    const tasks = await tasksModel.getAll();

    return res.status(200).json(tasks)
};

const addTask = async (req, res) => {
    const createdTask = await tasksModel.addTask(req.body);
    return res.status(201).json(createdTask);
}

const removeTask = async (req, res) => {
    const {id} = req.params;
    await tasksModel.removeTask(id);
    return res.status(204).json();

}

const updateTask = async (req, res) => {
    const {id} = req.params;

    await tasksModel.updateTask(id, req.body);
    return res.status(204).json();
}




module.exports = {
    getAll,
    addTask,
    removeTask,
    updateTask
}