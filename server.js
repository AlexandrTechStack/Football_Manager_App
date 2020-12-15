const express = require('express')
const cors = require('cors')
const path = require('path')
const sequelize = require('./backend/models')
const passportConfig = require('./backend/services/auth.service/passport')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser');
const userRouter = require('./backend/routes/users')
const clubRouter = require('./backend/routes/clubs')
const taskRouter = require('./backend/routes/tasks')
const coachRouter = require('./backend/routes/coaches')
const mediaRouter = require('./backend/routes/media_upload')


//Server Configs
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000
app.get('/', ((req, res) => res.send('Welcome')))


app.use(cors())
app.use(express.json())


//CookieSession
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIEKEY]
}))
app.use(passport.initialize())
app.use(passport.session())



app.use(bodyParser.json());
//Routes
app.use('/users', userRouter)
app.use('/clubs', clubRouter)
app.use('/tasks', taskRouter)
app.use('/coaches', coachRouter)
app.use('/media', mediaRouter)

//Auth Route
app.use('/auth', require('./backend/routes/auth_routes'))



//DataBase connection controller
sequelize.authenticate().then(function (errors) {
    console.log(errors)
});

//Server connection controller
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})