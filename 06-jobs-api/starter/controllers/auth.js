const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");
const { BadRequestError } = require('../errors/bad-request');
const jwt = require('jsonwebtoken');

// post request
const register = async(req, res)=> {
    const user = await User.create({ ...req.body })
    // invoking the jwt function in user.js/model
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({ user: {name: user.name}, token })
}

 const login = async (req, res) => {
     const { email, password } = req.body
     if(!email || !password ) {
         throw new BadRequestError("Please provide email and paswword")
     }
 }

 module.exports = {
     register, 
     login
 }