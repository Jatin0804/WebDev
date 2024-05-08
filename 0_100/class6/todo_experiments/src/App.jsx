import { useState } from 'react';
import React, { memo } from 'react';

let counter = 4;

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: "Gym",
    description: "Go to Gym 7-8"
  }, {
    id: 2,
    title: "DSA",
    description: "Study DSA 9-11"
  }, {
    id: 3,
    title: "WebDev",
    description: "Study web development 11-1"
  }])

  function addTodo(){
    setTodos([...todos, {
      id: counter++,
      title: Math.random(),
      description: Math.random()
    }])
  }

  return (
    <div>
      {/*<Todo title={title} setTitle={setTitle} />*/}

      <button onClick={addTodo}>Add a Todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}


    </div>
  )
}

function Todo({title, description}){
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
