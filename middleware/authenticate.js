var { User } = require('../models/user');

var authenticate = (req, res, next) => {
    
    var token = req.header('x-auth-token');
    console.log(token);
    User.findByToken(token).then((user) => {
        if (!user) {
            return Promise.reject();
        }
        req.user = user;
        req.token = token;
        next();
    }).catch((e) => {
        res.status(200).send({
            data: null,
            code: 4010,
            error: 'UnAuthorized Token'
        });
    })
}

module.exports = { authenticate }