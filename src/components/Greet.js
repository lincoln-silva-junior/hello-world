import React from 'react'

// function Greet () {
    // return <h1>Hello Lincoln</h1>
//}

// Destructuring Props First Way
/*const Greet = ({ name, heroName }) => {
    return ( 
        <div>
            <h1>
                Hello { name } a.k.a { heroName }
            </h1>            
        </div>    
        )
}*/

// Destructuring Props Second Way
/*const Greet = props => {
    const { name, heroName } = props
    return ( 
        <div>
            <h1>
                Hello { name } a.k.a { heroName }
            </h1>            
        </div>    
        )
}*/

const Greet = props => {
    console.log(props)
    return ( 
    <div>
        <h1>
            Hello { props.name } a.k.a { props.heroName }
        </h1>
        { props.children }
    </div>    
    )
    // props.children renderiza o que está dentro da diretiva Greet
    // Tem que estar dentro da mesma diretiva de retorno.
}


export default Greet