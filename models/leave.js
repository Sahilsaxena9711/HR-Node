var mongoose = require('mongoose');

var LeaveSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    leaveType: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: false
    }
});


var Leave = mongoose.model('Leave', LeaveSchema);

module.exports = { Leave };