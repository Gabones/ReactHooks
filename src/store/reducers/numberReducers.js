export function numberReducer(state, action) {
    switch(action.type){
        case 'number_add2':
            return {...state, number: state.number+2}
        case 'mult7':
            return {...state, number: state.number*7}
        case 'div25':
            return {...state, number: state.number/25}
        case 'parseInt':
            return {...state, number: parseInt(state.number)}
        case 'addN':
            return {...state, number: state.number + action.payload.number }
        default:
            return state
    }   
}