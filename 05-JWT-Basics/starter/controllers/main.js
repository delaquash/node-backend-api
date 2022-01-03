// check username /password in post(login) request
// if it exist, create jwt
// send back to frontend
// set up auth so only user/request with jwt can access the dashboard

const jwt = require('jsonwebtoken');
const CustomAPIError = require("../errors/custom-error");

const login = async(req, res) => {
    const { username, password } = req.body;
    if(!username || !password){
        throw new CustomAPIError("Please provide username and password", 400)
    }

    // just for demo, this is always provided by DB
    const id = new Date().getDate()

    // trying to keep payload small, better experience for the user
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'})
    res.status(200).json({msg: 'User created', token})
}

const dashboard = async (req, res) => {
    const authHeader = req.headers.authorization
    // if there is no bearer or bearer doesnt start with correct values
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new CustomAPIError("No token provided", 401)
    }
    const token = authHeader.split(' ')[1]
    console.log(token)
    // verification of token
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({msg: `Hello, ${decodedToken.username}`, secret:`Here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard
}