// build your `Task` model here
const db = require('../../data/dbConfig')

const getAllTasks = async () => {
    const tasks = await db('Tasks as t')
    .leftJoin('projects as p', 't.project_id', 'p.project_id')
    .select(
        't.task_id',
        't.task_notes',
        't.task_completed',
        't.task_description',
        'p.project_name',
        'p.project_description'
    )

    return tasks
}

const getTaskByID = async (task_id) => {
    return await db('Tasks').where("task_id", task_id)
}

const insertTask = async (newItem) => {
    const post = await db.insert({
        task_notes: newItem.task_notes,
        task_completed: newItem.task_completed,
        task_description: newItem, task_description,
        project_id: newItem.project_id
    }).into('Tasks')

    return getTaskByID(post)
}

module.exports = {
    getAllTasks,
    getTaskByID,
    insertTask
}