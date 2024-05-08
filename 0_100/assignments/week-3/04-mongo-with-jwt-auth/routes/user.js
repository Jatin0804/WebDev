const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
      username: username,
      password: password,
    });

    res.json({
      message: "User Created Successfully.",
    });
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    })

    if (user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        res.json({
            token
        })
    } else {
        res.status(411).json({
            msg: "Incorrect Email or Password."
        })
    }
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find({})
        .then(function (response) {
            res.json({
                courses: response,
            });
        });
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const username = req.username;
    const courseId = req.params.courseId;
    // console.log(username);

    User.updateOne(
      {
        username: username,
      },
      {
        "$push": {
          purchasedCourses: courseId,
        },
      }
    ).catch(function (e) {
      console.log(e);
    });

    res.json({
      msg: "Purchase complete.",
    });
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.username
    });
    // console.log(user.purchasedCourses);

    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })

    res.json({
        msg: courses
    })
});

module.exports = router