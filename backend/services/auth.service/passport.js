const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const User = require('../../models/user')
const express = require('express')
const LocalStrategy = require('passport-local').Strategy
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') })


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
    function(email, password, done) {
        User.findOne({ email: email }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect email.' });
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
        clientID: process.env.GOOGLECLIENTID,
        clientSecret: process.env.GOOGLECLIENTSECRET
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