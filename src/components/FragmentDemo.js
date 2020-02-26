import React from 'react'

function FragmentDemo() {
    return (
        // React.Fragment agrupa mais do que um
        // parent nodes sem precisar criar um 
        // elemento DIV para fazer isto.
        <React.Fragment>
            <h1>Fragment Demo</h1>
            <p>This describes the Fragment Demo component</p>
        </React.Fragment>
    )
}

export default FragmentDemo
