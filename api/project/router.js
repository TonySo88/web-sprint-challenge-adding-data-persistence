// build your `/api/projects` router here
const express = require('express')
const model = require('./model')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const outcome = await model.getAllProjects()
        res.status(200).json(outcome)
    } catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const data = await model.insertProject(req.body)
        res.status(200).json(data)
    } catch(err) {
        next(err)
    }
})

module.exports = router