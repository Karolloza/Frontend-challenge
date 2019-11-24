import { FETCH_POSTS, FETCH_POST_DETAILS } from '../actions/types'

const initialState = {
    userPosts: [],
    postDetails: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                userPosts: action.data
            };
        case FETCH_POST_DETAILS:
            return {
                ...state,
                postDetails: action.data
            };
        default:
            return state
    }
}