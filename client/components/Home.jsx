import React from 'react'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Home extends React.Component {
  

    render() {
        return (
            <div className='homeDiv'>
                <Link to='/goodness' className='link'><button className='btn'>GOODNESS AISLE</button></Link> 
                <Link to='/add' className='link'><button className='btn'>SHARE YOUR YUMS</button></Link>
            </div>
        )
    }
}



export default connect()(Home)