import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    // foco...
    number: 0
}

function reducer(state, action) {
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
        case 'login':
            return {...state, user: { name: action.payload.name }}
        default:
            return state
    }   
}

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    let N

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"></SectionTitle>
            <div className="center">
                {state.user ? <span className="text">{state.user.name}</span> : <span className="text">Anonymous</span>}
                <span className="text">{state.number}</span>
                <input type="number" className="input" value={N}/>
                <div>
                    <button className="btn" onClick={_ => dispatch({type: 'login', payload:{ name: 'Gabriel' }})}>Login</button>
                    <button className="btn" onClick={_ => dispatch({type: 'number_add2'})}>+2</button>
                    <button className="btn" onClick={_ => dispatch({type: 'mult7'})}>*7</button>
                    <button className="btn" onClick={_ => dispatch({type: 'div25'})}>/25</button>
                    <button className="btn" onClick={_ => dispatch({type: 'parseInt'})}>Parse</button>
                    <button className="btn" onClick={_ => dispatch({type: 'addN', payload: {number: 10}})}> AddN </button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
