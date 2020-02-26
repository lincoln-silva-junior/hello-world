import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 30,
            skill: 'NodeJS'
        }
    ]

    // Só podemos usar index como Key se forem respeitadas 3 condições:
    // Os itens do array não tem um id único 
    // A lista é estática e não mudará
    // A lista nunca deve ser filtrada ou reordenada
     const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>)
     return <div>{ nameList } </div>

    //Precisamos ter um atributo Key em cada elemento da lista para que
    //o React possa gerenciar as inclusões, alterações e deleções de forma eficiente
    //const personList = persons.map(person => <Person key={person.id} person = {person} />)
    
    //return <div>{ personList }</div>

    // return (
    //     <div>
    //         {
    //             names.map(name => <h2>{name}</h2>)
    //         }
    //     </div>
    // )
    // return (
    //     <div>
    //         <h2>{names[0]}</h2>
    //         <h2>{names[1]}</h2>
    //         <h2>{names[2]}</h2>
    //     </div>
    // )
}

export default NameList
