const passport = require('passport')
/*
class Roles {
    constructor() {
    }

    AuthRole = (req, res, role) => {
        return passport.authenticate('jwt', {session: false}, function (err, user) {
            if (user && user.currentRole === role) {
                return res.send(200, {userContent: 'You login as' + role});
            } else {
                return res.send(403, {
                    message: 'You are not a user'
                });
            }
        })
    }
}
*/


module.exports = AuthRole = (req, res, role) => {
    return passport.authenticate('jwt', {session: false}, function (err, user) {
        if (user && user.currentRole === role) {
            return res.send(200, {userContent: 'You login as' + role});
        } else {
            return res.send(403, {
                message: 'You are not a user'
            });
        }
    })(req, res)
}