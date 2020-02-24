import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
        // Método recomendado pela documentação do React
        // para fazer EventBind
        //this.clickHandler = this.clickHandler.bind(this);
    }
    
    // clickHandler(){
    //     this.setState({
    //         message: 'GoodBye!'
    //     })
    // }

    // Nova feature do React
    // Arrow Function fazem o bind automaticamente
    clickHandler = () => {
        this.setState({
            message: 'GoodBye!'
        })
    }
    
    render() {
        return (
            <div>
                <div>{ this.state.message }</div>

                { /* Não deve ser usado para EventBind por questões de performance */ }
                {/*<button onClick={ this.clickHandler.bind(this) }>Click</button> */ }
                {/*<button onClick={ () => this.clickHandler() }>Click</button> */}
                <button onClick={ this.clickHandler }>Click</button>


            </div>
        )
    }
}

export default EventBind
