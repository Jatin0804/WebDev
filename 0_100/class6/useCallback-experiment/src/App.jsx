import {memo, useCallback, useState} from 'react'


function App() {
  const [count, setCount] = useState(0);

  // function onClick(){
  //     console.log("Child clicked");
  // }

  const onClick = useCallback(() => {
      console.log("Hi there");
  }, [])

  return (
      <>
        <Child onClick={onClick}/>
        <button onClick={() => {
            setCount(count + 1);
        }}>
            Click me {count}
        </button>
      </>
  )
}

const Child = memo(({onClick}) => {
    console.log("child render");

    return <div>
        <button onClick={onClick}>
            Button clicked
        </button>
    </div>
})

export default App
