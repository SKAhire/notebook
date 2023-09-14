const express = require('express');
const User = require('../models/Users');
const router = express.Router();
const { body, validationResult } = require('express-validator');




//create User using: POST "/api/auth". Doesn't require Auth
router.post('/', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', "Enter a valid Email").isEmail(),
    body('password', 'Password must have a minimum of 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }).then(user => res.json(user))
        .catch(err => {
            console.log(err)
            res.json({ error: 'This email is already taken!'})
        })
})

module.exports = router;