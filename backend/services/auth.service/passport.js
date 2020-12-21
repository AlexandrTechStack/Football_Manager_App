const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') })
const User = require('../../models/user')
const Login = require("../../models/login");
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')


passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWTKEY
}
module.exports = (passport) => {
    passport.use(
        new JwtStrategy(options, async (payload, done) => {
            try{
                const user = await User.findByPk(payload.userId)

                if(user) {
                    done(null, user)
                } else {
                    done(null, false)
                }
            } catch (e){
                console.log(e)
            }

        })
    )
}



//Strategy
passport.use(
    new GoogleStrategy({
        //options
        callbackURL: '/auth/google/redirect',
        clientID: process.env.GOOGLECLIENTID,
        clientSecret: process.env.GOOGLECLIENTSECRET
    }, async (accessToken, refreshToken, profile, done) => {
        //checking if user already in db TEST BY name
        //dont forget ADD my costom function for geting the user by field!!!
        await User.findOne({
            where: {email: profile.emails[0].value}
        }).then( async (currentUser) => {
                if (currentUser) {
                    //already have user
                    console.log('user is: ', currentUser)
                    done(null, currentUser)
                } else {
                    const user = await User.create({
                        email: profile.emails[0].value
                    })
                    await Login.create({
                        provider: 'google',
                        token: profile.id,
                        UserId: user.id
                    }).then((newUser) => {
                            console.log('User added')
                            done(null, newUser)
                        })
                }

            })
        console.log(profile)
    })
)




/*
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

//maybee Usefull
Login.findOne({
            where: {token: profile.id},
            include: [{
                model: User,
                where: {email: profile.emails[0].value} //
            }]
        })
 */