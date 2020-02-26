import React, { Component } from 'react'

class MountLifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Lincoln'
        }
        console.log('Mounting LifecycleB constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Mounting LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('Mounting LifecycleB componentDidMount')
    }
    
    render() {
        console.log('Mounting LifecycleB render')
        return (            
            <div>
                <h1>Lifecyle B</h1>
            </div>
        )
    }
}

export default MountLifeCycleB
