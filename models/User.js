const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    contactNo: {
        type:Number,
        required: true
    },
    joiningDate: {
        type: Date,
        required:true
    },
    role: {
        type: String, // [employee, admin]
        required:true,
        default: "employee"
    }
}, 
{
    timestamps: true,
    collection:'users'
});

module.exports = mongoose.model('User', usersSchema);