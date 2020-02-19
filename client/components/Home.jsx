import React from 'react'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Goodness from './Goodness'

class Home extends React.Component {
  

    render() {
        return (
            <div className='homeDiv'>
                <Link to='/goodness' className='link'><button className='btn'>GOODNESS AISLE</button></Link> 
            </div>
        )
    }
}



export default connect()(Home)