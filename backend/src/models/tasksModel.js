const connection = require('./connection')

const getAll = async () => {
    const tasks = await connection.execute('SELECT * FROM tasks');
    return tasks[0];
};

const addTask = async (task) => {
    const {title} = task;

    //pega a data atual
    const dateUTC = new Date(Date.now()).toUTCString();

    const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?,?,?)';

    const createdTask = await connection.execute(query, [title, 'pendente', dateUTC])

    return createdTask[0]
};

module.exports = {
    getAll,
    addTask
}