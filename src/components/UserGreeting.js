import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }

    // Renderização Condicional
    render() {        

        return this.state.isLoggedIn && <div>Welcome Lincoln</div>

        // Método mais recomendado para renderização
        // Condicional
        
        // return this.state.isLoggedIn ?
        //        <div>Welcome Lincoln</div> :
        //        <div>Welcome Guest</div>

        //***********************************************
        // if(this.state.isLoggedIn) {
        //     return <div>Welcome Lincoln</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }        
        
        // return (
        //     <div>
        //         <div>Welcome Lincoln</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
