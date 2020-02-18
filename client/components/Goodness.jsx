import React from 'react'

import { connect } from 'react-redux'

const Goodness = (props) => {
    return (
        <div>
            <h1>good stuff </h1>
            <h2>...to be shared</h2>
        </div>
    )
}

// mapStateToProps(state) {
//     return {
       
//     }
// }

export default connect()(Goodness)