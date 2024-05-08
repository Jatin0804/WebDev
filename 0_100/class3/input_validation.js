const express = require("express");
const app = express();

// validation
const zod = require("zod");
const schema = zod.array(zod.number());

// example
const schema1 = Object({
    email: zod.string(),
    password: zod.string(),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number())
})

//middleware for body json
app.use(express.json());


// app.post("/health-checkup", function(req, res){
//     const kidneys = req.body.kidneys;
//     const kidneyLength = kidneys.length;

//     // what if the user doesnot send the required data, then it will crash
//     res.send("your kidney length is : " + kidneyLength);

//     // so input validation required.
// });


app.post("/health-checkup", function (req, res) {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);

  res.send({
    response
  })
});


// global catches
// it is used to properly show the errors and not long errors
app.use(function(err, req, res, next, ){
    res.json({
        msg: "Sorry, something wrong with server."
    })
})

app.listen(3000)