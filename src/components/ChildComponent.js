import React from 'react'

function ChildComponent(props) {
    //Passando parâmetros do componente pai para o filho
    //Utilizando o método do Pai passado via Props
    return (
        <div>
            <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
