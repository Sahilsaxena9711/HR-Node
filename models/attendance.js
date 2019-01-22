var mongoose = require('mongoose');

var AttendanceSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    entryTime: {
        type: String,
    },
    month: {
        type: String,
        required: true
    },
    exitTime: {
        type: String
    },
    overTime: {
        type: String
    },
    lessTime: {
        type: String
    },
    date: {
        type: Date,
        required: true
    },
    lateSwipeIn: {
        type: String
    },
    totalTime: {
        type: String
    },
    approved: {
        type: Boolean,
        default: false
    }
});


var Attendance = mongoose.model('Attendance', AttendanceSchema);

module.exports = { Attendance };