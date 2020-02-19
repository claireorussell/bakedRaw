import {combineReducers} from 'redux'

import loading from './loading'
import recipes from './recipes'

export default combineReducers({
  loading, 
  recipes
})
