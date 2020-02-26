import React from 'react'

function Memo({name}) {
    console.log('Rendering Memo Component')
    return (
        //Memo evita de um componente ser renderizado
        //novamente se o estado do mesmo não muda
        //nunca.
        //
        //Utilizado por questões de performance
        <div>
            {name}
        </div>
    )
}

export default React.memo(Memo)
