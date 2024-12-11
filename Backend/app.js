const dotenv = require("dotenv");
dotenv.config();

const express  = require("express");
const app = express();
const connectToDb  = require("./db/db.js")
const cookieParser = require("cookie-parser")


const userRoutes = require("./routes/user.routes.js")
const captainRoutes = require("./routes/captain.routes.js")

connectToDb()


const cors = require("cors");

app.use(cors())
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send("hello world")
})


app.use("/users",userRoutes);
app.use("/captain",captainRoutes);




module.exports = app;