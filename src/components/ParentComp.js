import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import Memo from './Memo'

export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Lincoln'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Lincoln'
            })
        }, 2000)
    }
    
    render() {
        console.log('*****Parent Comp Render*****')
        return (
            <div>
                Parent Component
                <Memo name={ this.state.name }></Memo>
                {/* <RegComp name={ this.state.name } /> */}
                {/* <PureComp name={ this.state.name } /> */}
            </div>
        )
    }
}

export default ParentComp
