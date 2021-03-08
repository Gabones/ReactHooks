    import { allReducers } from './reducers/listaReducers'

const initialState = {
    cart: [],
    products: [],
    user: null,
    // foco...
    number: 0
}

export {
    initialState,
    allReducers,
}