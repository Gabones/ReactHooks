import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { initialState, allReducers } from '../../store'
import { numberAdd2, login } from '../../store/actions/indexActions'

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(allReducers, initialState)
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
                    <button className="btn" onClick={_ => login(dispatch, 'Maria')}>Login</button>
                    <button className="btn" onClick={_ => numberAdd2(dispatch)}>+2</button>
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
