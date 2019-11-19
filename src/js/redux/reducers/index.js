import {combineReducers} from 'redux'
import postUser from './postUserReducer'

export default combineReducers({
    users: postUser
})