const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    name : String , 
    district : String , 
    psName : String ,
    pinCode : Number, 
    rating : Number ,
    suggestion : String,
    currDate : String

})

const UserModel = mongoose.model("users", UserSchema)

module.exports = UserModel 