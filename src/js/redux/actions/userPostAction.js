import { FETCH_POSTS, FETCH_POST_DETAILS } from './types'

export const fetchPostsAction = () => dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => dispatch({
                type: FETCH_POSTS,
                data: data
            }))
            .catch(error => {
                dispatch({
                    type: 'FETCH_POSTS_ERROR',
                    error: true,
                    data: error
                })
            })
}

export const fetchPostDetails = (id) => dispatch => {
    fetch(`https://jsonplaceholder.typicode.com${id}`)
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_POST_DETAILS,
            data: data
        }))
}