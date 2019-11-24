import { SEARCH_VALUE } from '../actions/types'

const initialState = {
    searchValue: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.value
            };

        default:
            return state
    }
}