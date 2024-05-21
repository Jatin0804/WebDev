import {useEffect, useMemo, useState} from 'react'


function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  // let sum = 0;
  // for (let i = 1; i <= inputValue; i++) {
  //   sum += i;
  // }

  let sum = useMemo(() => {
      console.log("Memo got called.");
      let finalSum = 0;
      for (let i = 0; i <= inputValue; i++) {
          finalSum += i;
      }
      return finalSum;
  }, [inputValue]);

  return (
    <>
      <p>
        Write a number to get the sum from 1 to n:
      </p>
      <input onChange={function (e) {
        setInputValue(e.target.value);
      }} placeholder="1" />
      <p>
        Sum from 1 to {inputValue} is {sum};
      </p>
      <button onClick={() => {
        setCount(count + 1);
      }}>
        Counter ({count})
      </button>
    </>
  )
}

/*
function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  const [finalValue, setFinalValue] = useState(0);

  useEffect(() => {
    let sum = 0;
    for (let i = 1; i <= inputValue; i++) {
      sum += i;
    }
    setFinalValue(sum);
  }, [inputValue])

  return (
      <>
        <p>
          Write a number to get the sum from 1 to n:
        </p>
        <input onChange={function (e) {
          setInputValue(e.target.value);
        }} placeholder="1" />
        <p>
          Sum from 1 to {inputValue} is {finalValue};
        </p>
        <button onClick={() => {
          setCount(count + 1);
        }}>
          Counter ({count})
        </button>
      </>
  )
}
*/

export default App
