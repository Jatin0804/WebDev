const express = require('express');
const {createTodo} = require("./types");
const {todo} = require("./db");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        msg: "Welcome to the Todo App, Go to port localhost:3000/todos"
    })
})

app.post("/todo", async function(req, res) {
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);

    if (!parsedPayLoad.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        });
        return;
    }

    // Put it in mongoDB
    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false,
    })
    res.json({
        msg: "Todo created successfully",
    })
});

app.get("/todos",async function(req, res) {
    /*
    res.json({
        msg: "Welcome to the Todo App, Work in progress"
    })
    */

    const todos = await todo.find({});
    res.json({
        todos
    })

});

app.put("/completed", async function(req, res) {
    const updatedPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(updatedPayLoad);

    if (!parsedPayLoad.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        });
        return;
    }

    await todo.update({
        _id: req.body.id
    }, {
        completed: true,
    })
    res.json({
        msg: "Todo marked as Completed",
    })
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})