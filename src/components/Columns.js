import React from 'react'

function Columns() {
    return (
        // React.Fragment agrupa mais do que um
        // parent nodes sem precisar criar um 
        // elemento DIV para fazer isto. Não ne-
        //cessidade criar Nós extras para agupar
        //elementos
        <React.Fragment>
            <td>Name</td>
            <td>Lincoln</td>
        </React.Fragment>
    )
}

export default Columns
