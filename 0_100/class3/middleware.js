const express = require('express');
const app = express();


//middleware
function userMiddleWare(req, res, next){3
    const username = req.headers.username;
    const password = req.headers.password;

    if (username !== "jatin" || password !== "pass"){
        res.status(403).json({
            msg: "Incorrect Credentials."
        });
    } else {
        next();
    }
}

function kidneyMiddleWare(req, res, next){
    const kidneyId = req.query.kidneyId;

    // next();
    if (kidneyId !== 1 || kidneyId !== 2){
        res.status(403).json({
            msg: "Incorrect details."
        });
    } else {
        next();
    }
}

//app.use is used to get a middleware to be used in all requests.
app.use(userMiddleWare);
app.use(kidneyMiddleWare);

// app.get("/health-checkup", userMiddleWare, kidneyMiddleWare, function(req, res){
//     // do something

//     res.send("you are healthy.");
// });


app.get("/health-checkup", function(req, res){
    // do something

    res.send("you are healthy.");
});

// app.get("/kidney-checkup", userMiddleWare, kidneyMiddleWare, function(req, res){
//     // do something

//     res.send("Your kidneys are healthy.");
// })

app.get("/kidney-checkup", function(req, res){
    // do something

    res.send("Your kidneys are healthy.");
})




app.listen(3001)