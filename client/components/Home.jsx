import React from 'react'

import { connect } from 'react-redux'

import Goodness from './Goodness'

class Home extends React.Component {
    state = {
        noDisplay : true
    }

    handleClick() {
        console.log('hi')
        this.setState = {
            noDisplay : false
        }
        this.props.dispatch(getRecipes())
        
    }


    render() {
        return (
            <div className='homeDiv'>
                <h1>BAKED RAW</h1>
                {this.state.noDisplay ? <button className='btn' onClick={() => { this.handleClick }}>GOODNESS AISLE</button> : <Goodness />}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
    recipes: state.recipes
    }
}

export default connect(mapStateToProps)(Home)