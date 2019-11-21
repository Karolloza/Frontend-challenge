import { FETCH_POSTS } from '../actions/types'

const initialState = {
    userPosts: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POSTS:
            console.log('reducer')
            console.log(action.data)
            return {
                ...state,
                userPosts: action.data
            };
        default:
            return state
    }
}