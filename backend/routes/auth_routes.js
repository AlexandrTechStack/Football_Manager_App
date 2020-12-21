const express = require('express')
const router = express.Router()
const passport = require('passport')
const UserController = require('../controllers/user.controller')

router.post('/signup', UserController.Register)
router.post('/login', UserController.Login)
//OAuth
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}))
router.get('/google/redirect', passport.authenticate('google'), ((req, res) => {
    res.redirect('/')
    res.send(req.user.firstName + ' Welcome!')
}))
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})

module.exports = router



/*

//Local
router.get('/login', passport.authenticate('local', {
    scope: ['profile']
}))

//Local redirect
router.get('/local/redirect', passport.authenticate('local'), ((req, res) => {
    res.redirect('/profile/')
    res.send(req.user.firstName + ' Welcome!')
}))

//Logout
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})






//Google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}))

//Google redirect
router.get('/google/redirect', passport.authenticate('google'), ((req, res) => {
    res.redirect('/users/')
    res.send(req.user.firstName + ' Welcome!')
}))


module.exports = router
 */