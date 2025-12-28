const jwt = require("jsonwebtoken");
const {json_adminKey}=require("../config");

function adminMiddleware ( req , res , next) {
    const token = req.headers.token ;
    const decoded = jwt.verify(token , json_adminKey);

    if(decoded) {
        req.adminId = decoded.id ;
        next();
        
    } else {
        res.status(403).json({
            message:"you are logged in as a admin"
        })
    }
}

module.exports= {
    adminMiddleware : adminMiddleware
}