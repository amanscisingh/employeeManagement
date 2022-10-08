const express = require('express');
const apiRoute = express.Router();

const User = require('../models/User');
const authenticate = require('../middleware/authenticate');

apiRoute.get('/users', authenticate, async (req, res) => {
    try {
        const allUsers = await User.find();
        res.json({
            status: true,
            message: 'All users',
            users: allUsers
        });

    } catch (error) {
        res.json({ status: false, message: error.message });
    }
})


module.exports = apiRoute;