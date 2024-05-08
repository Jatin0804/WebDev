import {useEffect, useState} from 'react'

/*
function App() {
  const [count, setCount] = useState(0)

    useEffect(() => {
        alert(count)
    }, [count]);

  return (
    <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

    </div>
  )
}
*/
function App() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        setInterval(() => {
            fetch("https://sum-server.100xdevs.com/todos")
                .then(async function(res) {
                    const json = await res.json();
                    setTodos(json.todos);
                })
        }, 10000)
    }, []);

    return (
        <div>
            {todos.map(
                todo => <Todo key={todo.id} title={todo.title} description={todo.description} />
            )}
        </div>
    )
}

function Todo({title, description}) {
    return <div>
        <h1>
            {title}
        </h1>
        <h2>
            {description}
        </h2>
    </div>
}

export default App
