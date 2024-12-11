const userModel = require("../models/user.model.js")




module.exports.createUser = async({firstname,lastname,email,password})=>{
    if(!firstname||!email||!password){
        throw new Error("All fileds are required");
    }

    const user =  userModel.create({
        fullName:{
            firstname,
            lastname,
        },
        email,
        password
    })

    return user;

}

