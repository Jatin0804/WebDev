// const fs = require("fs");
const express = require('express');

const app = express()
const port = 3000

// fs.readFile("path", "utf-8", ())

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.listen(port)