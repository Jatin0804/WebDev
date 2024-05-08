import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CardWrapper innerComponent = {
        <TextComponent text = {"hello"} />
      } />

      <CardWrapper innerComponent = {
        <TextComponent text = {"khud try krr rha"} />
      } />

      <CardWrapper1>
        Hi there
      </CardWrapper1>

      <CardWrapper1>
        <div>
          <h2>Ye kuch naya h </h2>
        </div>
      </CardWrapper1>

      <CardWrapper1>
        <CardWrapper innerComponent ={
          <TextComponent text={"YE to bawaal h"} />
        }>
        </CardWrapper>
      </CardWrapper1>

    </div>
  )
}

function CardWrapper1({children}) {
  return <div style = {{
    border: '2px solid black',
    padding: '10px',
    margin: '10px' }}>
    {children}
  </div>
}

function CardWrapper({innerComponent}) {
  return <div style = {{
    border: '2px solid black',
    padding: '10px',
    margin: '10px' }}>
    {innerComponent}
  </div>
}

function TextComponent({text}) {
  return <div>
    <h1>
      {text}
    </h1>
  </div>
}


export default App
