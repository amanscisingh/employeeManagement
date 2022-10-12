const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        default: 'No Description'
    },
    type: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
}, 
{
    timestamps: true,
    collection:'tasks'
});

module.exports = mongoose.model('Task', usersSchema);