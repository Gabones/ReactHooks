import { numberReducer } from './numberReducers'
import { userReducer } from './userReducers'

export function allReducers(state, action) {
    let newState = numberReducer(state, action)
    return userReducer(newState, action)  
}