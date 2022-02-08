const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");
const User = require("../models/User");

const auth = (req, res, next) => {
    // check header
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new UnauthenticatedError('Authentication Invalid')
    }
    // turns the token into a array of strings
    const token = authHeader.split('')[1]

    try {
        // verify token
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        // attach user to job routes
        req.user ={userId: payload.userId, name: payload.name}
        next()
    } catch (error) {
        throw new UnauthenticatedError('Authentication Invalid')
    }
}

module.exports = auth