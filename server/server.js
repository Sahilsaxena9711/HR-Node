require('../config/config');

var express = require('express');
var bodyparser = require('body-parser');
var _ = require('lodash')
var { User } = require('../models/user');
var { Attendance } = require('../models/attendance');
var { Leave } = require('../models/leave');
var { authenticate } = require('../middleware/authenticate');
var { pathAuth } = require('../middleware/pathAuth');
var { mongoose } = require('./db/mongoose');
var { msToHMS } = require('../util/hhmmss');
var { milli } = require('../util/milliseconds');
var { mail } = require('../mail/mailer');

var app = express();

const port = process.env.PORT;

app.use(bodyparser.json());

app.get('/user/all', authenticate, (req, res) => {
    if (req.user.role == "HR") {
        User.find().then((user) => {
            let usernames = _.map(user, function (object) {
                return _.pick(object, ['username']);
            });
            res.status(200).send({
                data: {data: usernames, message: "Request Completed Successfully"},
                code: 2000,
                error: null
            });
        }).catch((e) => {
            res.status(400).send({
                data: null,
                code: 4000,
                error: e.message
            });
        })
    } else {
        res.status(400).send({
            data: null,
            code: 4000,
            error: "This request can only be made by HR"
        });
    }

})

app.post('/user', (req, res) => {
    var body = _.pick(req.body, ['email', 'username', 'password', 'role']);
    var user = new User(body);
    user.save().then((user) => {
        return user.generateAuthToken();
    }).then(() => {
        return mail(user.email, `http://localhost:8090/user/verify/${user.tokens[0].token}`, user.username);
    }).then(() => {
        res.status(200).send({
            data: { data: null, message: `Verificaion link has been sent to ${user.email}` },
            code: 2000,
            error: null
        });
    }).catch((e) => {
        res.status(400).send({
            data: null,
            code: 4000,
            error: e.message
        });
    });
});

app.get('/user/verify/:token', pathAuth, (req, res) => {
    User.findOne({ _id: req.user._id }).then((user) => {
        user.verified = true;
        user.save().then((user) => {
            res.status(200).send("Verified successfully, Please login now!");
        }).catch((e) => {
            res.status(400).send({
                data: null,
                code: 4000,
                error: e.message
            });
        })
    }).catch((e) => {
        res.status(400).send({
            data: null,
            code: 4000,
            error: e.message
        });
    })
})

app.get('/user', authenticate, (req, res) => {
    res.status(200).send({
        data: {data: req.user, message: "Request Completed Successfully"},
        code: 2000,
        error: null
    });
});

app.post('/user/login', (req, res) => {
    var body = _.pick(req.body, ['username', 'password']);
    User.findByCredential(body.username, body.password).then((user) => {
        if(user.verified){
            res.status(200).send({
                data: {data: user, message: "Request Completed Successfully"},
                code: 2000,
                error: null
            });
        }else{
            res.status(400).send({
                data: null,
                code: 4000,
                error: "Please verify your email first"
            });    
        }
    }).catch((e) => {
        res.status(400).send({
            data: null,
            code: 4000,
            error: "Invalid Username or Password"
        });
    })
})

app.post('/attendance', authenticate, (req, res) => {
    var body = _.pick(req.body, ['month', 'date', 'time']);
    Attendance.findOne({ date: body.date, username: req.user.username }).then((attendance) => {
        if (!attendance) {
            var data = {};
            data.month = body.month;
            data.date = body.date;
            data.entryTime = body.time;
            data.username = req.user.username;
            if (milli(body.time) > 37800000) {
                data.lateSwipeIn = msToHMS(milli(body.time) - 37800000);
            }
            var att = new Attendance(data);
            att.save().then((att) => {
                res.status(200).send({
                    data: {data: att, message: "Request Completed Successfully"},
                    code: 2000,
                    error: null
                });
            }).catch((e) => {
                res.status(400).send({
                    data: null,
                    code: 4000,
                    error: e.message
                });
            });
        } else {
            attendance.exitTime = body.time;
            attendance.totalTime = msToHMS(milli(body.time) - milli(attendance.entryTime));
            if (32400000 > milli(body.time) - milli(attendance.entryTime)) {
                attendance.lessTime = msToHMS(32400000 - (milli(body.time) - milli(attendance.entryTime)));
            } else {
                attendance.overTime = msToHMS(milli(body.time) - milli(attendance.entryTime) - 32400000);
            }
            attendance.save().then((attendance) => {
                res.status(200).send({
                    data: {data: attendance, message: "Request Completed Successfully"},
                    code: 2000,
                    error: null
                });
            }).catch((e) => {
                res.status(400).send({
                    data: null,
                    code: 4000,
                    error: e.message
                });
            });

        }
    }).catch((e) => {
        res.status(400).send({
            data: null,
            code: 4000,
            error: e.message
        });
    })
});

app.get('/attendance/:month', authenticate, (req, res) => {
    var month = req.params.month;
    var username = req.user.username
    Attendance.find({ month, username }).then((attendance) => {
        res.status(200).send({
            data: {data: attendance, message: "Request Completed Successfully"},
            code: 2000,
            error: null
        });
    }).catch((e) => {
        res.status(400).send({
            data: null,
            code: 4000,
            error: e.message
        });
    });
});

app.get('/attendance/username/:username/date/:date', authenticate, (req, res) => {
    if (req.user.role == "HR") {
        var date = req.params.date;
        var username = req.params.username
        Attendance.findOne({ date, username }).then((attendance) => {
            res.status(200).send({
                data: {data: attendance, message: "Request Completed Successfully"},
                code: 2000,
                error: null
            });
        }).catch((e) => {
            res.status(400).send({
                data: null,
                code: 4000,
                error: e.message
            });
        });
    } else {
        res.status(400).send({
            data: null,
            code: 4000,
            error: "This request can only be made by HR"
        });
    }
});

app.get('/attendance/date/:date', authenticate, (req, res) => {
    var date = req.params.date;
    var username = req.user.username
    Attendance.findOne({ date, username }).then((attendance) => {
        res.status(200).send({
            data: {data: attendance, message: "Request Completed Successfully"},
            code: 2000,
            error: null
        });
    }).catch((e) => {
        res.status(400).send({
            data: null,
            code: 4000,
            error: e.message
        });
    });
});

app.post('/leave/apply', authenticate, (req, res) => {
    var body = _.pick(req.body, ['month', 'date', 'reason', 'leaveType']);
    Leave.findOne({ username: req.user.username, date: body.date }).then((leave) => {
        if (!leave) {
            var data = {};
            data.username = req.user.username;
            data.month = body.month;
            data.date = body.date;
            data.reason = body.reason;
            data.leaveType = body.leaveType;
            var lev = new Leave(data);
            lev.save().then((lev) => {
                return mail('sahilsaxena9711@gmail.com', `localhost:8090/leave/approve/${lev._id}`);
            }).then(() => {
                res.status(200).send({
                    data: {data: lev, message: "Request Completed Successfully"},
                    code: 2000,
                    error: null
                });
            }).catch((e) => {
                res.status(400).send({
                    data: null,
                    code: 4000,
                    error: e.message
                });
            });
        } else {
            res.status(400).send({
                data: null,
                code: 4000,
                error: `You have already applied leave for ${body.date}`
            });
        }
    }).catch((e) => {
        res.status(400).send({
            data: null,
            code: 4000,
            error: e.message
        });
    });
});

app.get('/leave/delete/:id', authenticate, (req, res) => {
    Leave.findOneAndDelete({ _id: req.params.id }).then((leave) => {
        if (!leave) {
            res.status(400).send({
                data: null,
                code: 4000,
                error: "No leaves found"
            });
        } else {
            res.status(200).send({
                data: { data: null, message: "Leave deleted successfully!" },
                code: 2000,
                error: null
            });
        }

    }).catch((e) => {
        res.status(400).send({
            data: null,
            code: 4000,
            error: e.message
        });
    });
});

app.get('/leave/all', authenticate, (req, res) => {
    if (req.user.role == "HR") {
        Leave.find().then((leave) => {
            res.status(200).send({
                data: {data: leave, message: "Request Completed Successfully"},
                code: 2000,
                error: null
            })
        }).catch((e) => {
            res.status(400).send({
                data: null,
                code: 4000,
                error: e.message
            });
        })
    } else {
        res.status(400).send({
            data: null,
            code: 4000,
            error: "This request can only be made by HR"
        });
    }
});

app.get('/leave/my', authenticate, (req, res) => {
    Leave.find({ username: req.user.username }).then((leave) => {
        res.status(200).send({
            data: {data: leave, message: "Request Completed Successfully"},
            code: 2000,
            error: null
        });
    }).catch((e) => {
        res.status(400).send({
            data: null,
            code: 4000,
            error: e.message
        });
    });
});

app.post('/leave/approve/:id', authenticate, (req, res) => {
    if (req.user.role == "HR") {
        Leave.findOne({ _id: req.params.id }).then((leave) => {
            if (!leave) {
                res.status(400).send({
                    data: null,
                    code: 4000,
                    error: "No leave found to delete"
                });
            } else {
                leave.approved = true;
                leave.save().then(() => {
                    res.status(200).send({
                        data: { data: null, message: "Leave approved Successfully" },
                        code: 2000,
                        error: null
                    });
                }).catch((e) => {
                    res.status(400).send({
                        data: null,
                        code: 4000,
                        error: e.message
                    });
                })
            }
        }).catch((e) => {
            res.status(400).send({
                data: null,
                code: 4000,
                error: e.message
            });
        });
    } else {
        res.status(400).send({
            data: null,
            code: 4000,
            error: "This request can only be made by HR"
        });
    }
});

app.listen(port, () => {
    console.log(`Starting app on port ${port}`);
});
module.exports = { app };