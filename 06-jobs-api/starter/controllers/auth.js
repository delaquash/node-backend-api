const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");

const register = async(req, res)=> {
    res.send("register route")
}

 const login = async (req, res) => {
     res.send("login route")
 }

 module.exports = {
     register, 
     login
 }