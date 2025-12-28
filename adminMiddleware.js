const jwt = require("jsonwebtoken");
const { json_adminKey } = require("../config");

function adminMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: "Missing authorization header" });
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, json_adminKey);
        req.userId = decoded.id;
        next();
    } catch (err) {
        return res.status(403).json({ message: "Invalid token" });
    }
}

module.exports = { adminMiddleware };