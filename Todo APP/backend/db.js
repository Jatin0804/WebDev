const mongoose = require("mongoose");

const LINK = "mongodb+srv://admin:admin123@newdb.tbyzlz3.mongodb.net/todos"

mongoose.connect(LINK)

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo: todo
}