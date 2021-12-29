// check username /password in post(login) request
// if it exist, create jwt
// send back to frontend
// set up auth so only user/request with jwt can access the dashboard

const CustomAPIError = require("../errors/custom-error");

const login = async(req, res) => {
    const { username, password } = req.body;
    if(!username || !password){
        throw new CustomAPIError("Please provide username and password", 400)
    }
    res.send('Fake login/register/signup route')
}

const dashboard = async (req, res) => { 
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({msg: `Hello, Olaide Emmanuel`, secret:`Here is your authorized data,
    your lucky number is ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard
}