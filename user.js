const jwt = require("jsonwebtoken");
const {json_userKey}= require("../config");

function userMiddleware ( req , res , next) {
    const token = req.headers.token ;
    const decoded = jwt.verify(token , json_userKey);

    if(decoded) {
        req.userId = decoded.id ;
        next();

    } else {
        res.status(403).json({
            message:"you are logged in"
        })
    }
}

module.exports= {
    userMiddleware : userMiddleware
}