const express = require('express');
const app = express();

app.get("/health-checkup", function(req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if(username === "jatin" && password === "pass"){
        if(kidneyId == 1 || kidneyId == 2){
            res.json({
                msg : "Your kidney is fine."
            })
        }
        // } else {
        //     res.json({
        //         msg: "Bad input"
        //     })
        // } 
    }
    res.status(404).json({
        "msg" : "wrong"
    })
});

app.listen(3000);