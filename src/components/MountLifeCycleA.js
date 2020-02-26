import React, { Component } from 'react'
import MountLifeCycleB from './MountLifeCycleB'

class MountLifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Lincoln'
        }
        console.log('Mounting LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Mounting LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('Mounting LifecycleA componentDidMount')
    }
    
    render() {
        console.log('Mounting LifecycleA render')
        return (            
            <div>
                <h1>Lifecyle A</h1>
                <MountLifeCycleB></MountLifeCycleB>
            </div>
        )
    }
}

export default MountLifeCycleA
