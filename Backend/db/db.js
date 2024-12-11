const mongoose = require("mongoose");

function connectToDb() {
    mongoose.connect(process.env.DB_LINK)
    .then(() => {
        console.log("Successfully connected to the database");
    })
    .catch((error) => {
        console.error("Error connecting to the database:", error);
    });
}   

module.exports = connectToDb;
