//learn about next function / 

const express = require('express');
const app = express();

app.get("/", function(req, res, next){
    console.log("hello from fn1");
    next();
}, function(req, req){
    console.log("hello from fn2");
});

app.listen(3000)