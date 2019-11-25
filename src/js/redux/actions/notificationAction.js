import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from './types'

export const showNotification = (status, title, text, visible) => {
    return {type: SHOW_NOTIFICATION, status, title, text, visible}
}

export const hideNotification = () => {
    return {type: HIDE_NOTIFICATION}
}