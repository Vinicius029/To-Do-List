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



module.exports = {
    getAll,
    addTask
}