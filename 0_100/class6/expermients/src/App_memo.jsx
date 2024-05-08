import React, { useState, memo } from 'react'

function App() {
    const [title, setTitle] = useState("My word is : baby")

    return (
        <div>
            <button onClick={() => {
                setTitle("My word is : " + Math.random())
            }}>
                Update the title
            </button>

            <Header title={title}></Header>
            <Header title={title}></Header>
            <Header title="Kaise ho"></Header>
            <Header title="Arre kse ho"></Header>
            <Header title="Bta de yaar"></Header>
            <Header title="Theek mat bta"></Header>
            <Header title="Last time puchra"></Header>
            <Header title="Btade ksa h "></Header>
        </div>
    )
}

const Header = memo(function ({title}){
    // Parent re-renders
    // But only the desired child re-renders
    return <div>
        <h1>{title}</h1>
    </div>
})

export default App
