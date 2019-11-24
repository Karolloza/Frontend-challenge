import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './js/redux/reducers/index.js'

// const initialState = {};
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store