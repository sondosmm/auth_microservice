const User =require('../models/user');
const Token =require('../models/token');
const {generateTokens}=require('../utils/generateTokens');
const asyncHandler = require("../utils/asyncHandler");
const bcrypt=require('bcryptjs');
const { token } = require('morgan');
require("dotenv").config({path: "./config.env"}); 

const jwt = require('jsonwebtoken');


exports.register = asyncHandler(async(req,res)=>{
  try{  
    const {email,password}=req.body;

    if(!email||!password)
    {
        return res.status(400).json({error:'email and password are required'});
    }
  
    const user = await User.create({email,password});
    
    return res.status(201).json({id: user._id});
  }
   catch(err){
    console.error("Error during registration:", err);
    const code = err.code || (err.cause && err.cause.code);
        if(code===11000)
        {
            return res.status(409).json({error:'email already exists'});
        }
         return res.status(500).json({ error: "registration failed" });
        
    }
    


});


exports.login= asyncHandler(async(req,res)=>{
    const {email,password}= req.body;
    
    if (!email || !password) {
      return res.status(400).json({ error: "email and password are required" });
    }
    const user= await User.findOne({email});
    if(!user|| !(await bcrypt.compare(password,user.password)))
    {
        res.status(401).json({error:'incorrect email or password'});
    }

    const {accessToken, refreshToken}= generateTokens(user._id);
    await Token.create({userId:user._id, token:refreshToken});

    res.cookie('accessToken',accessToken,{httpOnly:true});
    res.cookie('refreshToken',refreshToken,{httpOnly:true});

    res.json({accessToken});
});

exports.refresh=asyncHandler(async(req,res)=>{
    const{refreshToken}=req.cookies;
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const tokenExist= await Token.findOne({token:refreshToken});
    if (!tokenExist)
    {
        res.status(401).json({error:'Invalid token'});
    }
    const {accessToken,refreshToken:newRefreshToken}=generateTokens(decoded.id);
    await Token.findOneAndUpdate(
        {token:refreshToken},
        {token:newRefreshToken}
    );

    res.cookie("accessToken", accessToken, { httpOnly: true });
    res.cookie("refreshToken", refreshToken, { httpOnly: true });

    res.json({ accessToken });

});

