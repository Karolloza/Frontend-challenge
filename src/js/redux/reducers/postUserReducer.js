import {FETCH_USER} from '../actions/types'

const initialState = {
    user: [],
    count: 0
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_USER:
            return {
                ...state,
                count: state.count + 1,
                user: [...state.user, action.user]
            }

        default:
            return state
    }
}