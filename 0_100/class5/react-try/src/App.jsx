import { useState } from 'react'


function App(){
    const [todos, setTodos] = useState([{
        title: "Gym",
        description: "Go to Gym from 7-8",
        completed: false
    }, {
        title: "Study React",
        description: "Study React from 9-11",
        completed: true
    }, {
        title: "Study Python",
        description: "Study React from 11-1",
        completed: true
    }]);

    function AddTodo(){
        /*
        let newTodo = [];
        for (let i = 0; i < todos.length; i++){
            newTodo.push(todos[i])
        }
        newTodo.push({
            title: "Gym",
            description: "Gym jaao",
        })
        setTodos(newTodo);
        */
         

        setTodos([...todos, {
            title: "new Todo",
            description: "Description of new Todo",
        }])
    }

    return (
        <div>
            {/*{JSON.stringify(todos)}*/}
            {/*<Todo title="hello" description="try krlete h"></Todo>*/}
            {/*<Todo title={todos[0].title} description={todos[0].description}>*/}
            {/*</Todo>*/}
            {/*<Todo title={todos[1].title} description={todos[1].description}>*/}
            {/*</Todo>*/}

            <button onClick={AddTodo}>Add a random Todo</button>

            {todos.map(function (todo){
                return <Todo title={todo.title} description={todo.description} />;
            })}

            <DarkTodos todos={todos}/>
        </div>
    )
}

function DarkTodos(props){
    return <div>
        {props.todos.map(function (todo){
            return <div style={{
                background: "black",
                color: "white"
            }}>
                <Todo title={todo.title} description={todo.description} />
            </div>
        })}
    </div>
}

function Todo(props){
    return <div>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
    </div>
}

/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <CustomButton count={count} setCount={setCount}></CustomButton>
        <CustomButton count={count * 10} setCount={setCount}></CustomButton>
        <CustomButton count={count * 100} setCount={setCount}></CustomButton>
    </div>
  )
}
*/

/*
//component
function CustomButton(props){

    function onClickHandler() {
        props.setCount(props.count + 1);
    }

    return <button onClick={onClickHandler}>
        Counter {props.count}
    </button>
}
*/
export default App
