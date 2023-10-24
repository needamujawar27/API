const mongoose=require("mongoose");

const usersModel=mongoose.model("users",{
    fname:{type:String},
    lname:{type:String},
    email:{type:String},
    age:{type:Number},
    phone:{type:Number}
});
module.exports=usersModel       