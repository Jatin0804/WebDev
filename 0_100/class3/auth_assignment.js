const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

app.use(express.json())

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

// const userExists = (user, pass) => {
//   return ALL_USERS.find((item) => item.name === user && item.pass === pass);
// };

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  for(let i = 0; i < ALL_USERS.length ; i++){
    if (username === ALL_USERS[i].username && password === ALL_USERS[i].password){
        return true;
    }
  }
  return false;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username

    // const otherUsers = ALL_USERS.filter((user) => user.username != username)
    // res.json(otherUsers);
    
    // let users = [];
    // for (let i = 0; i < ALL_USERS.length; i++) {
    //   if (username === ALL_USERS[i]["username"]) {
    //     continue;
    //   }
    //   users.push(ALL_USERS[i]);
    // }
    // res.json(users);

    res.json({
        users: ALL_USERS.filter(function(value) {
            if(value.username === username){
                return false;
            }
            else{
                return true;
            }
        })
    })
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);
