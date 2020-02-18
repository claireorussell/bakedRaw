import React from 'react'
import {Link} from 'react'
import {connect} from 'react-redux'

const Home = () => (
    <div className='homeDiv'>
    <h1>Baked Raw</h1>
    <button className='btn'>Enter goodness aisle</button>
    </div>
)

export default connect()(Home)