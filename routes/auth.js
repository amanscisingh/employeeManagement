const express = require('express');
const authRoute = express.Router();

const AuthController = require('../controllers/AuthController');

authRoute.post('/register', AuthController.register);
authRoute.post('/login', AuthController.login);
authRoute.post('/refresh-token', AuthController.refreshToken);

// authRoute.get('/register', async (req, res) => {
//     try {
//         const user = await Users.findOne({ email: req.body.email });
//         if (user) {
//             res.json({ status: true, message: 'User already exists' });
//         } else {
//             let hashedPassword = await bcrypt.hash(req.body.password, 10);
//             let newUser = new User({
//                 email: req.body.email,
//                 password: hashedPassword
//             });

//             await newUser.save();
//             res.json({
//                 status: true,
//                 message: 'User created successfully',
//                 user: newUser
//             });
//         }

//     } catch (error) {
//         res.json({ status: false, message: error.message });
//     }   
// })

// authRoute.get('/login', async (req, res) => {
//     try {
        
//     } catch (error) {
        
//     }
// })


module.exports = authRoute;