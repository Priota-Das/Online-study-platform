import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        minlength:6,
        required:true
    },
    profilePic:{
        type:String,
        default: "",
    }
},
{timestrap:true}
);

const User = mongoose.model("User",userSchema);
export default User;