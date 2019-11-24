import { combineReducers } from 'redux'
import userPostReducer from './userPostReducer'
import searchValueReducer from './searchValueReducer'

export default combineReducers({
    userPosts: userPostReducer,
    searchValue: searchValueReducer
})