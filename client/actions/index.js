import request from 'superagent'


export const getRecipes = () => {
  return request
    .get('/api/v1/recipes')
    .then(response => {
      console.log(response)
      return response.body
    })
} // talks to the backend route of api/v1/recipes which returns the json(recipes)


export const gotRecipes = (recipes) => {
  return {
    type: 'GOT_RECIPES',
    recipes: recipes
  }
} // sets out the case for the reducer to set the global state of the recipes


export function fetchRecipes () {
    return dispatch => {
      getRecipes()
      .then(recipes => {
        console.log(recipes)
        dispatch(gotRecipes(recipes))
      })
    }
    
    
}
