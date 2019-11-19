import {FETCH_USER} from './types'

export const setUser = user => {
    return { type: FETCH_USER, user}
}