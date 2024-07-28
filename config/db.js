const mongoose = require("mongoose");
// const mongoUrl = process.env.MONGODB_URI;
// mongoose.connect('mongodb://localhost:27017/flightdb', { useNewUrlParser: true, useUnifiedTopology: true });
function databaseConnection(){
    mongoose.set("strictQuery",true);
    mongoose.connect('mongodb://localhost:27017/Flight', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database Connected Successfully");
    })
    .catch((err) => {
        console.log("Database Not Connected Successfully : " + err);
    });

}

module.exports = databaseConnection;