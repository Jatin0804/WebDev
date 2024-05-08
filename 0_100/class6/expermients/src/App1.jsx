import React, { useState, Fragment } from 'react'

function App() {

    return (
        <div>
            <HeaderWithButtons />
            <Header title="Kaise ho"></Header>
            <Header title="m bdiya"></Header>
        </div>
    )
}

function HeaderWithButtons(){
    // Now only the desired child re-renders
    const [title, setTitle] = useState("My word is : baby")

    function updateTitle() {
        setTitle("My word is : " + Math.random())
    }

    return <div>
        <button onClick={updateTitle}>
            Update the title
        </button>
        <Header title={title}></Header>
    </div>
}

function Header({title}){
    return <div>
        <h1>{title}</h1>
    </div>
}

export default App
