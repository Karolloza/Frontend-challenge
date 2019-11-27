import { FETCH_POSTS, FETCH_POST_DETAILS } from './types'

export const fetchPostsAction = posts => {
    return { type: FETCH_POSTS, data: posts }
}

export const fetchPostDetailsAction = data => {
    return { type: FETCH_POST_DETAILS, data: data }
}