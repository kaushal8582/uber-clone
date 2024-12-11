const captainModel = require("../models/captain.model.js");


module.exports.createCaptain = async({firstname,lastname,email,password,color,plate,capacity,vehicleType})=>{
    if(!firstname  || !lastname |!email ||!password ||!color ||!plate ||!capacity ||!vehicleType ){
        throw new Error("All fields are required");
    }

    const captain = captainModel.create({
        fullname:{
            firstname,
            lastname,
        },
        email,
        password,
        vechical:{
            color,
            plate,
            capacity,
            vehicleType,
        }
    })

    return captain;
}