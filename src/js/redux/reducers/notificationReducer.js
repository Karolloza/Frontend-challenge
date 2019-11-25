import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from '../actions/types'

const initialState = {
    notification: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SHOW_NOTIFICATION:
            return {
                ...state,
                notification: {
                    status: action.status,
                    title: action.title,
                    text: action.text,
                    visible: true
                }
            };
        case HIDE_NOTIFICATION:
            return {
                ...state,
                notification: {
                    visible: false
                }
            }

        default:
            return state
    }
}