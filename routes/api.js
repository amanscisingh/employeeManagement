const express = require('express');
const apiRoute = express.Router();
const bcrypt = require('bcryptjs');

const User = require('../models/User');
const Task = require('../models/Tasks');
const authenticate = require('../middleware/authenticate');

// helper functions to calculate previous date
function prevDate (date) {
    let cdate = new Date(date);
    let pdate = new Date(cdate.setDate(cdate.getDate()-1));
    return pdate.toLocaleDateString();
}

function prevWeek(date) {
    let cdate = new Date(date);
    let pdate = new Date(cdate.setDate(cdate.getDate()-7));
    return pdate.toLocaleDateString();
}

// @desc /api/
apiRoute.get('/users', authenticate, async (req, res) => {
    try {
        const filter = {};
        console.log(req.query);
        if(req.query.role) filter['role'] = req.query.role;
        const allUsers = await User.find(filter);
        console.log(req.body);
        res.json({
            status: true,
            message: 'All users',
            users: allUsers
        });

    } catch (error) {
        res.json({ status: false, error,  message: error.message });
    }
})

// @desc / update user info
apiRoute.post('/updateUser', authenticate, async (req, res) => {
    try {
        let user = User.findOne({ email: req.body.email });
        let cPass = req.body.password;
        let nPass = req.body.password2;
        let contact = req.body.contact;
        let dept = req.body.department;

        if(cPass != '' && nPass != '') {
            const isMatch = await bcrypt.compare(cPass, user.password);
            const hashedPass = await bcrypt.hash(nPass, 10);
            if(isMatch) {
                user.password = hashedPass;
            } else {
                res.status(201).json({
                    status: false,
                    message: 'Password Mismatch',
                })
            }
        }

        user.contact = contact;
        user.department = dept;
        await user.save();
        res.status(201).json({
            status: true,
            message: 'User updated successfully',
            userInfo: user
        })
    } catch (error) {
        res.json({ status: false, error,  message: error.message });
    }
})

// @desc / block employee
apiRoute.post('/blockuser', authenticate, async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({ email:req.body.email }, { isBlocked:req.body.isBlocked }, { new: true });
        res.status(201).json({
            status: true,
            message: 'User Un-blocked',
            user: user
        });

    } catch (error) {
        res.json({ status: false, error,  message: error.message });
    }
})

apiRoute.post('/tasks', authenticate, async (req, res) => {
    try {
        const newTask = new Task({
            email:req.user.email,
            description: req.body.description,
            type: req.body.type,
            startTime: req.body.startTime,
            duration: req.body.duration
        })

        console.log(newTask)

        await newTask.save();

        res.status(201).json({
            status: true,
            message: "Task created successfully",
            taskInfo: newTask
        })

    } catch (error) {
        res.json({ status: false, error,  message: error.message });
    }
})

// @desc /to get weekly tasks   
apiRoute.post('/weeklyTasks', authenticate, async (req, res) => {
    try {
        let todayDate = new Date(req.body.date);
        const pDate = prevWeek(todayDate);
        todayDate.toLocaleDateString();

        let allTasks = await Task.findAll({
            date: {
                $gte: pDate,
                $lte: todayDate
            }
        });

        res.status(201).json({
            status: true,
            message: `task from ${todayDate} to ${pDate}`,
            tasks: allTasks
        })

    } catch (error) {
        res.json({ status: false, error,  message: error.message });
    }
})

// @desc /to get curr day & prev day tasks   
apiRoute.post('/prevDayTasks', authenticate, async (req, res) => {
    try {
        let todayDate = new Date(req.body.date);
        const pDate = prevDate(todayDate);
        todayDate.toLocaleDateString();

        let cTask = await Task.findAll({
            date: todayDate
        });

        let pTask = await Task.findAll({
            date: pDate
        });

        res.status(201).json({
            status: true,
            message: `task from ${todayDate} to ${pDate}`,
            todayTasks: cTask,
            prevTasks: pTask
        })

    } catch (error) {
        res.json({ status: false, error,  message: error.message });
    }
})


apiRoute.get('/tasks', authenticate, async (req, res) => {
    try {
        const filter = {
            email: req.body.email
        }
        if(req.body.date) filter['date'] = req.body.date;
        const allTasks = await Task.findAll(filter);
        res.json({
            status: true,
            message: 'All tasks',
            users: allTasks
        });

    } catch (error) {
        res.json({ status: false, error,  message: error.message });
    }
})

module.exports = apiRoute;