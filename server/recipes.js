const express = require('express')
const request = require('superagent')

const db = require('./db')

const router = express.Router()

router.use(express.json())

router.get('/recipes', (req, res) => {
  db.getRecipes()
  .then(recipes => {
    res.json(recipes)
  })
    
})

module.exports = router
