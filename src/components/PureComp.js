import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
        console.log('Pure Comp Render')
        return (
            // Pure Components só renderizam 
            // novamente um conteúdo se houve
            // alguma mudança no estado do componente
            //
            // Implementa shouldComponentUpdate e faz
            // uma comparação shallow de tipos primitivos
            // (mesmo valor e tipo) e tipos complexos (mesma
            // referência)
            //
            // Se houve mudança no estado o conteúdo 
            // é renderizado novamente. 
            //
            // É utilizado em alguns cenários que performance
            // da aplicação é crítica

            <div>
                Pure Component { this.props.name }
            </div>
        )
    }
}

export default PureComp
