import React, { Component } from 'react'

class Welcome extends Component {
    render () {
        return <h1>Class Component</h1>
    }
}

// Destructuring Props
/*class Welcome extends Component {
    render () {
        const {name, heroName} = this.props
        return (
            <h1>
                Welcome { name } a.k.a { heroName }
            </h1>
        )
    }
}*/

export default Welcome