import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Goodness from './Goodness'
import Add from './Add'

const App = () => (
  <Router>
    <div className='app'>
    <h1>BAKED RAW</h1>
    <Route exact path= '/' component={Home}/>
    <Route path='/goodness' component={Goodness}/>
    <Route path='/add' component={Add}/>
  </div>
  </Router>
)

export default App
