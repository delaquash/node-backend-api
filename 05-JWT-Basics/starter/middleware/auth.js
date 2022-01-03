const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");


const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization
    // if there is no bearer or bearer doesnt start with correct values
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new CustomAPIError("No token provided", 401)
    }
    const token = authHeader.split(' ')[1]
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        const { id, username } = decodedToken
        req.user = { id, username }
        next()
    } catch (error) {
        throw new CustomAPIError("Not authorized to access this route", 401)
    }
    
}

module.exports = authenticationMiddleware