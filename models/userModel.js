const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true,
    },

    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Please provide a valid Email."]
    },

    password:{
        type: String,
        required: true,
    },
});

userSchema.methods.generateJsonWebToken = function(){
    return jwt.sign({id: this._id,}, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES,
    })
};


module.exports = mongoose.model("Users", userSchema);