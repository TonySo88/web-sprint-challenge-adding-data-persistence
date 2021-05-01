// build your `Resource` model here
const db = require('../../data/dbConfig')

const getAllResources = async () => {
    return await db('resources')
}

const getResourcesByID = async (resource_ID) => {
    return await db('resources').where("resource_id", resource_id)
}

const insertResource = async (newItem) => {
    const post = await db.insert({
        resource_name: newItem.resource_name,
        resource_description: newItem.resource_description,
    }).into('resources')

    return getResourcesByID(post)
}

module.exports = {
    getAllResources,
    getResourcesByID,
    insertResource
}