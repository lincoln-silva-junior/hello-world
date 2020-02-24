import React, { Component } from 'react'

class Welcome extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    changeMessage() {
        this.setState( {
            message: 'Thank you for subscribing'
        })
    }

    render () {
        return (
            <div>
                <h1>
                    { this.state.message }
                    <br />
                    <button onClick= { () => this.changeMessage() }>Subscribe</button>
                </h1>
            </div>
            
        ) 
    }
}

export default Welcome