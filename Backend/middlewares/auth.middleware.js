const userModel = require("../models/user.model.js");
const blackListModel = require("../models/blacklistToken.model.js");
const bcrypt = require("bcrypt");
const jwt  = require("jsonwebtoken"); 
const captainModel = require("../models/captain.model.js");


module.exports.authUser = async(req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if(!token){
        return res.status(401).json({message:"Unauthorized"});
    }

    const isBlackListedToken = await blackListModel.findOne({token:token});

    if(isBlackListedToken){
        return res.status(401).json({message:'Unauthorized'});
    }
 
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECREAT);
        const user = await userModel.findById(decoded._id);

        req.user = user;
        return next();

    }catch(err){
        return res.status(401).json({message:'Unauthorized'});
    }
}


module.exports.authCaptain = async(req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if(!token){
        return res.status(401).json({message:"Unauthorized"});
    }

    const isBlackListedToken = await blackListModel.findOne({token:token});

    if(isBlackListedToken){
        return res.status(401).json({message:'Unauthorized'});
    }
 
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECREAT);
        const captain = await captainModel.findById(decoded._id);

        req.captain = captain;
        return next();

    }catch(err){
        return res.status(401).json({message:'Unauthorized'});
    }
}