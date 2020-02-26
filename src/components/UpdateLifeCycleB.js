import React, { Component } from 'react'
import MountLifeCycleB from './MountLifeCycleB'

class UpdateLifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Lincoln'
        }
        console.log('Updating LifecycleB constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Updating LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('Updating LifecycleB componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('Updating LifecycleB shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Updating LifecycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('Updating LifecycleB componentDidUpdate')
    }
    
    render() {
        console.log('Updating LifecycleB render')
        return (            
            <div>
                <h1>Lifecyle B</h1>
                
            </div>
        )
    }
}

export default UpdateLifeCycleB
