const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:admin123@newdb.tbyzlz3.mongodb.net/userappnew");

const express = require('express');
const app = express();
app.use(express.json());


const User = mongoose.model('Users', { 
    name : String, 
    email: String, 
    password: String
});

// const user = new User({
//     name: "Jatin",
//     email: "hello@gmail.com",
//     password: "123456"
// });

app.post("/signup", async function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({ email: username});
    if(existingUser){
        return res.status(400).send("Username alreadu exists.")
    }

    // const user = new User({
    //     name: name,
    //     email: username,
    //     password: password,
    // })

    await User.create({
        name,
        email : username, 
        password
    });

    user.save();
    res.json({
        "msg": "User created successfully."
    })
});

// user.save().then(() => {
//     console.log('Done')
// });


app.listen(3000)