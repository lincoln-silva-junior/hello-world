import React from 'react'

const Hello = () => {
    // Código com JSX
    return (
        <div>
            <h1>Hello Lincoln</h1>
        </div>
    )

    // Código sem JSX 
    //return React.createElement (
    //    'div',
    //    {id: 'hello', class: 'dummyClass'},
    //    React.createElement('h1', null, "Hello Lincoln")
    //)
}

export default Hello