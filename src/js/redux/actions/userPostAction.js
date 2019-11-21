import React from 'react'
import { FETCH_POSTS } from './types'

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