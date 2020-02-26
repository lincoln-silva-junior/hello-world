import React, { Component } from 'react'
import MountLifeCycleB from './MountLifeCycleB'
import UpdateLifeCycleB from './UpdateLifeCycleB'

class UpdateLifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Lincoln'
        }
        console.log('Updating LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Updating LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('Updating LifecycleA componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('Updating LifecycleA shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Updating LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('Updating LifecycleA componentDidUpdate')
    }

    handleChangeState = () => {
        this.setState({
            name: 'Vanessa'
        })
    }
    
    render() {
        console.log('Updating LifecycleA render')
        return (            
            <div>
                <h1>Lifecyle A</h1>
                <button onClick={this.handleChangeState}>Change State</button>
                <UpdateLifeCycleB></UpdateLifeCycleB>
            </div>
        )
    }
}

export default UpdateLifeCycleA
