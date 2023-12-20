const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    time:{
        type:String,
        default: new Date()
    }
});

const User=mongoose.model("User",userSchema);
module.exports=User;