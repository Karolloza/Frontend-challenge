import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './js/redux/reducers/index.js'
import { fetchPostsAction, fetchPostDetailsAction } from "./js/redux/actions/userPostAction";

// const initialState = {};
const store = createStore(rootReducer, applyMiddleware(thunk));

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => dispatch(fetchPostsAction(data)))

}

export const fetchDetails = id => dispatch => {
    console.log(id)
    fetch(`https://jsonplaceholder.typicode.com${id}`)
        .then(res => res.json())
        .then(data => dispatch(fetchPostDetailsAction(data)))
}

export default store