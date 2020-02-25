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

router.post('/add', (req, res) => {
  db.addRecipe(req.body)
  .then(id => res.json(id[0]))
})

module.exports = router
