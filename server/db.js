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

function addRecipe(recipe) {
    return db('recipes')
    .insert({
        name:recipe.name, 
        serves: recipe.serves, 
        ingredients: JSON.stringify(recipe.ingredients),
        method: JSON.stringify(recipe.method)
    })
}


module.exports = {
    getRecipes,
    addRecipe
}