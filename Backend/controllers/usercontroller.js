const userModel = require("../models/user.model.js");
const { use } = require("../routes/user.routes.js");
const userService = require("../services/user.services.js");
const { validationResult } = require("express-validator");
const blackListTokenModel = require("../models/blacklistToken.model.js")

module.exports.rejisterUser = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
 
  const { fullname, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({email});
  if(isUserAlreadyExists){
      return res.status(400).json({message:'User already exists'});
  }


  const hashPassword = await userModel.hashPassword(password);

  const user = await userService.createUser({
    email,
    firstname:fullname.firstname,
    lastname:fullname.lastname,
    password: hashPassword,
  });

  const token = await user.generateAuthToken();
 
  res.status(200).json({token,user});


}; 

module.exports.loginUser = async(req,res,next)=>{

  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
  }

  const {email,password} = req.body;

  const user = await userModel.findOne({email}).select('+password');
  if(!user){
    return res.status(401).json({message:"Invalid email or password"});
  }

  const isMatch = await user.comparePassword(password);

  if(!isMatch){
    return res.status(401).json({message:'Invalid email or password'});
  }

  const token = user.generateAuthToken();

  res.cookie('token',token);

  return res.status(200).json({token,user});
}


module.exports.getUserProfile = async(req,res)=>{
  return res.status(200).json(req.user);
}

module.exports.logoutUser = async(req,res)=>{
  res.clearCookie('token')
  const token = req.cookies.token || req.headers.authrization?.split(' ')[1];

  await blackListTokenModel.create({token});
  res.status(200).json({message:'Logged out'});

}