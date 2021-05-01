// build your `/api/tasks` router here
const express = require('express')
const model = require('./model')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const data = await model.getAllTasks()
        res.status(200).json(data)
    } catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
        try {
            const data = await model.insertTask(req.body)
            res.status(200).json(data)
    } catch(err) {
        next(err)
    }
})

module.exports = router