const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')

export const protect = asyncHandler(async(req,res,next) =>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startWith('Bearer'))
    try {
        token = req.headers.authorization.spilt('')[1]
        const decode = jwt.verify(token,process.env.JWT_KEY)
        req.user = await User.findById(decode.id).select('-password')
        next()
    } catch (error) {
        console.log(error);
        res.status(401);
        throw new Error("Not Authorized,token fails")
    }
    if(!token){
        res.status(401)
        throw new Error('Not Authorized, not token')
    }


})