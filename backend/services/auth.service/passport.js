const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('./passport_config')
const User = require('../../models/user')
const express = require('express')
const LocalStrategy = require('passport-local').Strategy


passport.serializeUser((user, done) => {
    done(null,user.id)
})

passport.deserializeUser((id, done) => {
    User.findByPk(id)
        .then((user) => {
            done(null,user)
        })
})

//Local Strategy
passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({ login: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));


//Google Strategy
passport.use(
    new GoogleStrategy({
        //options
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        //checking if user already in db TEST BY name
        //dont forget ADD my costom function for geting the user by field!!!
        User.findOne({firstName: profile.name.givenName})
            .then((currentUser) => {
                if (currentUser) {
                    //already have user
                    console.log('user is: ', currentUser)
                    done(null, currentUser)
                } else {
                    new User({
                        firstName: profile.name.givenName,
                        lastName: profile.name.familyName
                    }).save()
                        .then((newUser) => {
                            console.log('User added')
                            done(null, newUser)
                        })
                }

            })
        console.log(profile)
    })
)