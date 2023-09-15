const express = require('express');
const User = require('../models/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { body, validationResult } = require('express-validator');




//create User using: POST "/api/auth"/createuser. Doesn't require login
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', "Enter a valid Email").isEmail(),
    body('password', 'Password must have a minimum of 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    //if there are errors, return bad request and error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    //to check it the user with same email exist in database
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "This email is already been taken!" })
        }
        //encrypting and adding salt to the password
        const salt = await bcrypt.genSaltSync(10);
        secPass = await bcrypt.hash(req.body.password, salt)
        //create new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        });

        //adding jwt
        const JWT_SECRET = "somesecrectcod3";
        const data = {
            user: {
                id: user.id,
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);

        res.json({authToken})
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Some error occured');
    }
})

module.exports = router;