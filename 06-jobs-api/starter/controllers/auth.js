const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");
const { BadRequestError } = require('../errors/bad-request');
const bcrypt = require('bcryptjs')

// post request
const register = async(req, res)=> {
   
    const user = await User.create({ ...req.body })
    res.status(StatusCodes.CREATED).json({ user })
}

 const login = async (req, res) => {
     res.send("login route")
 }

 module.exports = {
     register, 
     login
 }