const express = require('express')
const app = express()


// function that returns a boolean if age is more than 14
function isOldEnough(age){
    return age >= 14;
}

function isOldEnoughMiddleWare(req, res, next){
    const age = req.query.age;
    if (age >= 14){
        next();
    } else {
        res.status(411).json({
            msg: "Sorry, you are not of age."
        })
    }
}


app.get("/ride1", function (req, res){
    if (isOldEnough(req.query.age)) {
        res.json({
            msg: "You have successfully completed the ride-1"
        })
    } else {
        res.status(411).json({
            msg: "Sorry, you are not of age."
        })
    }
})


app.get("/ride2", isOldEnoughMiddleWare, function (req, res){
    res.json({
        msg: "You have successfully completed the ride-2"
    })
})

app.use(isOldEnoughMiddleWare);

app.get("/ride3", function (req, res){
    res.json({
        msg: "You have successfully completed the ride-3"
    })
})


app.listen(3000)