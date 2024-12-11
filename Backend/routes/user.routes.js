const express = require("express");
const router=  express.Router();
const {body} = require("express-validator")
const userController = require("../controllers/usercontroller.js")
const {authUser}  = require("../middlewares/auth.middleware.js")



router.post("/register",[
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({min:3}).withMessage("First name must be at least 3 character long"),
    body("password").isLength({min:6}).withMessage('Password must be at least 6 characters long')
], userController.rejisterUser)

router.post("/login",[
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({min:6}).withMessage("Password must be at least 6 characters long")
],userController.loginUser)

router.get("/profile",authUser,userController.getUserProfile)

router.get("/logout",authUser,userController.logoutUser)

module.exports = router;