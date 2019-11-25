import { combineReducers } from 'redux'
import userPostReducer from './userPostReducer'
import searchValueReducer from './searchValueReducer'
import notificationReducer from './notificationReducer'

export default combineReducers({
    userPosts: userPostReducer,
    searchValue: searchValueReducer,
    notification: notificationReducer
})