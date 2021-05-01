// build your server here and require it from index.js
const express = require('express')

const projectRouter = require('./project/router')
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router')

const server = express(server)

server.use(epxress.json())

server.use('/api/projects', projectRouter)
server.use('/api/resource', resourceRouter)
server.use('/api/tasks', taskRouter)

module.exports = server