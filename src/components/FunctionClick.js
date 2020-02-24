import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log('Button Clicked')
    }
    return (
        <div>
            <button onClick={ clickHandler }>Click</button>
            { /* Event Handler function não deve ser chamado da maneira abaixo*/}            
            { /* <button onClick={ clickHandler() }>Click</button>*/ }
        </div>
    )
}

export default FunctionClick
