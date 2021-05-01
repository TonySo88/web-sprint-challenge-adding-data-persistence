// build your `Project` model here
const db = require('../../data/dbConfig')

const getAllProjects = async () => {
    return await db('Projects')
}

const getProjectsByID = async (project_id) => {
    return await db('Projects').where("project_id", project_id)
}

const insertProject = async (newItem) => {
    const insertItem = await db.insert({
        project_name: newItem.project_name,
        project_description: newItem.project_description,
        project_completed: (newItem.project_completed === true ? 1:0)
    }).into("Projects")

    return getProjectsByID(insertItem)
}

module.exports = {
    getAllProjects,
    getProjectsByID,
    insertProject
}