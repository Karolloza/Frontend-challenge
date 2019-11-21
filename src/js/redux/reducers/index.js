import { combineReducers } from 'redux'
import userPostReducer from './userPostReducer'

export default combineReducers({
    userPosts: userPostReducer
})