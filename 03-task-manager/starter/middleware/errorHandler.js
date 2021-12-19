const { CustomAPIError } = require("../errors/custom-errors");
const errorHandler = (err, req, res, next) => {
    // for error message apart from 500
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message})
    }
//    return res.status(err.status).json({ msg: err.msg })
 return res.status(500).json({ msg: `Something went wrong, Please try again later`})
}

module.exports = errorHandler