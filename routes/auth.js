const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("User")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {
    JWT_KEY
} = require('../keys');

// const requireLogin=require('../middleware/requireLogin')
// router.get('/home',requireLogin,(req,res)=>{
//     res.send("welcome to home");
// })

router.post('/signup', (req, res) => {
    const {
        name,
        email,
        password
    } = req.body
    if (!email || !password || !name) {
        return res.status(422).json({
            error: "Please add all the fields"
        })
    }
    User.findOne({
            email: email
        })
        .then((saveUser) => {
            if (saveUser) {
                return res.status(422).json({
                    error: "User already exists with that email"
                })
            }
            bcrypt.hash(password, 12)
                .then(hashpassword => {
                    const user = new User({
                        email,
                        password: hashpassword,
                        name
                    })
                    user.save()
                        .then(user => {
                            res.json({
                                message: "Successfully Registered"
                            })
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                })

        })
        .catch(err => {
            console.log(err);
        })

})

router.post('/signin', (req, res) => {
    const {
        email,
        password
    } = req.body
    if (!email || !password) {
        return res.status(422).json({
            error: "Please add all the fields"
        })
    }
    User.findOne({
            email: email
        })
        .then(savedUser => {
            if (!savedUser) {
                return res.status(422).json({
                    error: "Invaild email or password"
                })
            }
            bcrypt.compare(password, savedUser.password)
                .then(doMatch => {

                    if (doMatch) {
                        // res.json({
                        //     message: "Successsfuly Signed in"
                        // })

                        const token=jwt.sign({_id:savedUser._id},JWT_KEY);
                        const {_id,email,name}=savedUser;
                        res.json({token,user:{_id,email,name}})


                    } else {
                        return res.status(422).json({
                            error: "Invaild email or password"
                        })
                    }
                })

                .catch(err => {
                    console.log(err);
                })

        })

})


module.exports = router;