import React, {useEffect, useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const calcFatorial = s => {
    const n = parseInt(s)
    if(n < 0) return -1
    if(n===0) return 1
    return calcFatorial(n-1)*n
}

const UseEffect = (props) => {

    const padding = {paddingTop: '20px', paddingBottom: '20px', display: 'flex', justifyContent: 'center'}

    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [parOuImpar, setParOuImpar] = useState(1)

    useEffect(function() {setFatorial(calcFatorial(number))}, [number])

    useEffect(function() {if(fatorial > 1000000) document.title = 'High Number'}, [fatorial])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"></SectionTitle>
            <div style={padding} >
                <span className="text">Fatorial: </span>
                <span className="text red">{fatorial === -1 ? 'Não Existe' : fatorial}</span>
            </div>
            <div style={padding} >
                <input type="number" className="input" value={number} onChange={e => setNumber(+e.target.value)}/>
            </div>
            <SectionTitle title="Exercício #02"></SectionTitle>
            <div style={padding} >
                <span  className="text">Paridade: </span>
                <span className="text red">{parOuImpar % 2 === 0 ? 'Par' : 'Ímpar'}</span>
            </div>
            <div style={padding} >
                <input type="number" className="input" value={parOuImpar} onChange={e => setParOuImpar(+e.target.value)}/>
            </div>
        </div>
    )
}

export default UseEffect
