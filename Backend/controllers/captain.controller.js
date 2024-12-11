const blacklistTokenModel = require("../models/blacklistToken.model.js");
const captainModel  = require("../models/captain.model.js")
const captainService = require("../services/captain.services.js");
const {validationResult} = require("express-validator")

module.exports.rejisterCaptain = async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {email,fullname,password,vehicle} = req.body


    const isCaptainAlreadyExists = await captainModel.findOne({email});
    if(isCaptainAlreadyExists){
        return res.status(400).json({message:'Captain already exists'});
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        capacity:vehicle.capacity,
        email,
        plate:vehicle.plate,
        color:vehicle.color,
        password:hashedPassword,
        vehicleType:vehicle.vehicleType,
    })

    const token = captain.generateAuthToken();

    res.status(201).json({token,captain})
    
}


module.exports.loginCaptain = async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {email,password} = req.body

    const captain = await captainModel.findOne({email}).select('+password');
    if(!captain){
        return res.status(401).json({message:'Invalid email or password'});
    }

    const isMatch = await captain.comparePassword(password);

    if(!isMatch){
        return res.status(401).json({message:'Invalid email or password'});
    }

    const token = captain.generateAuthToken();

    res.cookie('token',token)

    return res.status(200).json({token,captain});

}

module.exports.getCaptainProfile = async(req,res)=>{
    return res.status(200).json({captain:req.captain})
}

module.exports.logoutCaptain = async(req,res)=>{
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    await blacklistTokenModel.create({token});

    res.clearCookie('token');
    res.status(200).json({message:'Logout Successfully'});
}