const config =require('../knexfile').development
const db = require('knex')(config)

function getRecipes() {
    return db('recipes')
    .select('*')
    .map(recipe => {
        console.log(recipe)
        recipe.ingredients = JSON.parse(recipe.ingredients)
        recipe.method = JSON.parse(recipe.method)
        console.log(recipe)
        return recipe
    })
}


module.exports = {
    getRecipes
}