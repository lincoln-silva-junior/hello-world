import React from 'react'

const heading = {
    fontSize: '72px',
    color: 'blue'
}

function Inline() {
    return (
        <div>   
            {/* Módulos precisam ser declarados nos componentes filhos*/}
            {/* <h1 className={ styles.success }>Success</h1> */}
            {/* Regular CSS declarado no componente App.js não precisam ser 
                declarados novamente nos componentes filhos.*/}
            <h1 className='error'>Error</h1>
            <h1 style={heading}>Inline</h1>
        </div>
    )    
}
export default Inline
