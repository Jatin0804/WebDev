import React, { useState, Fragment } from 'react'

function App() {
  // Everytime setTitle is called, the whole App re-renders and every child also re-renders

  const [title, setTitle] = useState("My word is : baby")

  // function updateTitle() {
  //     setTitle("My word is : " + Math.random())
  // }

  return (
    // <Fragment>
    <div>
        <button onClick={() => {
            setTitle("My word is : " + Math.random())
        }}>
            Update the title
        </button>

        <Header title={title}>

        </Header>
        <Header title="Kaise ho">

        </Header>
    {/*</Fragment>*/}
    </div>
  )
}

function Header({title}){
    return <div>
        <h1>{title}</h1>
    </div>
}

export default App
