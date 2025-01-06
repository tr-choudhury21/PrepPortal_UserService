const mongoose = require("mongoose");

const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "PrepPortal"
    })
    .then(()=>{
        console.log("Database Connected Succesfully!!");
    })
    .catch((err)=>{
        console.log(`Some error occurred while connecting to database: ${err}`);
    })
}

module.exports = dbConnection;