var { User } = require('../models/user');

var pathAuth = (req, res, next) => {
    var token = req.params.token;
    User.findByToken(token).then((user) => {
        if (!user) {
            return Promise.reject();
        }
        req.user = user;
        req.token = token;
        next();
    }).catch((e) => {
        res.status(401).send({
            data: null,
            code: 4010,
            error: 'UnAuthorized Token'
        });
    })
}

module.exports = { pathAuth }