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
    return pdate.toISOString().split('T')[0];
}

function prevWeek(date) {
    let cdate = new Date(date);
    let pdate = new Date(cdate.setDate(cdate.getDate()-7));
    return pdate;
}

// @desc /api/getOneUser
apiRoute.get('/getOneUser', authenticate, async (req, res) => {
    try {
        const filter = {};
        filter['email'] = req.query.email;
        const user = await User.findOne(filter);
        console.log(req.body);
        res.json({
            status: true,
            message: 'All users',
            userInfo: user
        });

    } catch (error) {
        res.json({ status: false, error,  message: error.message });
    }
})

// @desc /api/
apiRoute.get('/users', authenticate, async (req, res) => {
    try {
        const filter = {};
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
        let cPass = req.body.password;
        let nPass = req.body.password2;
        let updates = {
            name: req.body.name,
            contact: req.body.contact,
            department: req.body.department,
        }

        let cUser = await User.findOne({email: req.body.email});
        if(cPass != '' && nPass != '') {
            const isMatch = await bcrypt.compare(cPass, cUser.password);
            const hashedPass = await bcrypt.hash(nPass, 10);
            if(isMatch) {
                updates['password'] = hashedPass;
            } else {
                res.status(201).json({
                    status: false,
                    message: 'Password Mismatch',
                })
            }
        }
        console.log(updates)
        let user = await User.findOneAndUpdate({ email: req.body.email }, updates, { new: true });
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
        const tmp = await User.findOne( {email:req.body.email });
        const user = await User.findOneAndUpdate({ email:req.body.email }, { isBlocked: !tmp.isBlocked }, { new: true });
        res.status(201).json({
            status: true,
            message: 'User isBlocked toggled',
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
        let cDate = new Date(req.body.date);
        let email = req.query.email;
        const pDate = prevWeek(cDate);
        let weeklyTasks = [];
        const filter = {};
        if(email != '') filter['email'] = email;

        let allTasks = await Task.find(filter);
        for(let i=0; i<allTasks.length; i++) {
            const date = new Date(allTasks[i].startTime);
            if( date >= pDate && date <= cDate ) {
                weeklyTasks.push(allTasks[i]);
            }
        }
        res.status(201).json({
            status: true,
            message: `task from ${cDate} to ${pDate}`,
            tasks: weeklyTasks
        })

    } catch (error) {
        res.json({ status: false, error,  message: error.message });
    }
})

// @desc /to get curr day & prev day tasks   
apiRoute.post('/prevDayTasks', authenticate, async (req, res) => {
    try {
        let todayDate = new Date(req.body.date).toISOString().split('T')[0];
        const pDate = prevDate(req.body.date);
        let email = req.query.email;
        const filter = {};
        if(email != '') filter['email'] = email;
        let allTasks = await Task.find(filter);


        let cTask = [];
        let pTask = [];

        for(let i=0; i<allTasks.length; i++) {
            console.log(new Date(allTasks[i].startTime).toISOString().split('T')[0]);

            if( new Date(allTasks[i].startTime).toISOString().split('T')[0] ==  todayDate) {
                cTask.push(allTasks[i]);
            }

            if( new Date(allTasks[i].startTime).toISOString().split('T')[0] ==  pDate) {
                pTask.push(allTasks[i]);
            }
        }

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