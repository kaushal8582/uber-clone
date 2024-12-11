const express = require("express");
const router = express.Router();
const {body} = require("express-validator")
const captainController = require("../controllers/captain.controller.js");
const { authCaptain } = require("../middlewares/auth.middleware.js");


router.post("/register",[
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({min:3}).withMessage("First name must be at least 3 character "),
    body('password').isLength({min:6}).withMessage("Password must be at least 6 characters"),
    body('vehicle.color').isLength({min:3}).withMessage('Color must be at least 3 character'),
    body('vehicle.plate').isLength({min:3}).withMessage("Vehical Plate must be at least 3 character"),
    body('vehicle.capacity').isInt({min:1}).withMessage("capacity must be at least 1 "),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage("Invalid Vehical type"),
],captainController.rejisterCaptain)


router.post("/login",[
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min:6}).withMessage("Password must be at least 6 characters"),
],captainController.loginCaptain)

router.get("/profile",authCaptain,captainController.getCaptainProfile)
router.get("/logout",authCaptain,captainController.logoutCaptain)


module.exports = router;