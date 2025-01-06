const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const isUserAuthenticated = async (req, res, next) => {
    const token = req.cookies.userToken;

    if (!token) {
        return res.status(400).json({
            success: false,
            message: "User Not Authenticated!"
        });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id);

    if (!req.user) {
        return res.status(403).json({
            success: false,
            message: `User not authorized for this resource!`
        });
    }

    next();
};

module.exports = isUserAuthenticated;
