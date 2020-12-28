const passport = require('passport')
const User = require("../../models/user");

module.exports = AuthRole = (req, res, role) => {
    return passport.authenticate('jwt', {session: false}, function (err, user) {
        if (user && user.currentRole === role) {
            return res.send(200, {userContent: 'You login as' + role});
        } else {
            return res.send(403, {
                message: 'You are not a user, you ' + user
            });
        }
    })(req, res)
}