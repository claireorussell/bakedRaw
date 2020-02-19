const initialState = []

function recipes (state = initialState, action) {
    switch(action.type) {
        case 'GET_RECIPES':
            return action.recipes
        case 'GOT_RECIPES':
            return action.recipes
        default:
            return state
    }
}

export default recipes