const express = require('express');
const User = require('../models/users');
const jwt = require('jsonwebtoken')

const router = express.Router();

router.post('/register', async(req,res) => {
    const { firstName, lastName, email, password, roleType } = req.body;
    try {
        let user = await User.findOne({email});
        if (user) {
            return res.status(400).json({message: 'User already exists'});
        }

        newUser = new User ({
            firstName,
            lastName,
            email,
            password,
            roleType
        });

        await newUser.save();

        const payload = {
            user:{
                id:user._id
            }
        }
        const token = jwt.sign(payload, process.env.JWT_SECRET,{expiresIn: '1h'});

        res.status(200).json({message: 'User has been created successfuly'});

    } catch (error) {
        console.error(error.message??'Something went wrong');
        res.status(500).json({message:'Server Error'});
    }
});

router.post('/login', async(req,res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({message: 'Invalid credentials'});
        }

        const isMatch = user.matchPassword(password);

        if (!isMatch) {
            return res.status(400).json({message: 'Invalid Credentials'});
        }

        res.status(200).json({message: 'Login Successful', userID : user._id})
    } catch (error) {
        console.error('Server Error:', error.message);
        res.status(500).json({message: 'Server Error'})
    }
});