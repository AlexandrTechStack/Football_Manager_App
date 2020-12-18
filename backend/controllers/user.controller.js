const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })
const Controller = require('./controller')
const UserBl = require('../services/bl.service/user.bl')
const LoginBl = require('../services/bl.service/login.bl')
const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')

class UserController extends Controller {
    constructor() {
        super(UserBl);
    }

    Register = async (req, res) => {
        console.log(req.body.email)
        const candidate = await this.Bl.isRegister({where: {email: req.body.email}})
        if (candidate) {
            res.status(409).json({
                message: 'User already in'
            })
        } else {
            const salt = bcrypt.genSaltSync(10)
            const password = req.body.password
            const hash = bcrypt.hashSync(password, salt)
            const user = await this.Bl.registerUser({
                email: req.body.email,
                //password: bcrypt.hashSync(password, salt),
            })
            await LoginBl.createLogin(hash, user.id)
        }
        try {
            res.json('Added')
        } catch (err) {
            res.status(400).json('Error' + err)
        }
    }
    Login = async (req, res) => {
        const candidate = await this.Bl.isRegister({where: {email: req.body.email}})
        if (candidate) {
            const realpassword = await LoginBl.findPassword(candidate)
            const passwordResult = bcrypt.compareSync(req.body.password, realpassword.token)//candidate.password
            if(passwordResult){

                const token = jwt.sign({
                    email: candidate.email,
                    userId: candidate.id
                }, process.env.JWTKEY, {expiresIn: 60 * 60})

                res.status(200).json({
                    token: `Bearer ${token}`
                })
            } else{
                res.status(401).json({
                    message: 'Wrong password'
                })
            }
        } else {
            res.status(404).json({
                message: 'No such user'
            })
        }
    }
}

module.exports = new UserController()


/*
            const realpassword = await Login.findOne({
                where: {provider: 'local'},
                include: [{
                    model: User,
                    where: { id: candidate.id } //
                }]
            })
            */