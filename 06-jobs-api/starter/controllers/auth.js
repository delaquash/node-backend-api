const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");
const { BadRequestError, UnauthenticatedError} = require('../errors');
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
     const user = await User.findOne({email})
     if(!user) {
         throw new UnauthenticatedError('Invalid Credential')
     }

     const isPasswordCorrect = await user.comparePassword(password)
     if(!isPasswordCorrect){
         throw new UnauthenticatedError('Password is not correct')
     }
     const token = user.createJWT();
     res.status(StatusCodes.OK).json({user: {name: user.name}, token})
 }

 module.exports = {
     register, 
     login
 }