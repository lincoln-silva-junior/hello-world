import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
        super(props)
        // Cenário atribuindo a Referência
        // diretaemente
        this.inputRef = React.createRef()

        //Cenário utilizando uma CallBack
        //Function
        this.cbRef = null
        this.setCbRef = element => {
            this.cbRef = element
        }
    }

    componentDidMount(){
        console.log(this.cbRef)
        if (this.cbRef) {
            this.cbRef.focus()
        }
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }

    clickHandler = () =>{
        alert(this.inputRef.current.value)
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <input type="text" ref={this.setCbRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}
