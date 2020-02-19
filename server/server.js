const path = require('path')
const express = require('express')

const recipesRoutes = require('./recipes')
const server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1', recipesRoutes)

module.exports = server
