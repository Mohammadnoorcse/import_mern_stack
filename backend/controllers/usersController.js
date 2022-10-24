import { generateToken } from '../utils/greateToken';

const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')

export const registerUser = asyncHandler(async(req,res)=>{
    const {name,email,password} = req.body
    const userExist = await User.findOne({email})
    if(userExist){
        res.status(400)
        throw new Error("User Already Exists")
    }
    const user = await User.createA({name,email,password})
    if(user){
        res.json({
            _id:user.id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateToken(user._id)
        })
    }
    else{
        res.status(404)
        throw new Error('User Not Found')
    }
})

export const authController = asyncHandler(async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(user &&(await user.matchPassword(password))){
        res.json({
            _id:user.id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateToken(user._id)
        })
    }else{
        res.status(401);
        throw new Error("Invaild Email or Password")
    }

})


export const getUserProfile = asyncHandler(async(req,res)=>{
  const user = await User.findById(req.user._id)
  if(user){
    res.json({
        _id:user.id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin,
    })
  }else{
    res.status(401);
    throw new Error("User Not Found")
}

})
