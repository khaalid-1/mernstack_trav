
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userschema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
},{
    timestamps:true
})


userschema.pre("save",async function(next){
    if(!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password,salt);
        next()
    } catch (error) {
        next(error)
    }
})

userschema.methods.compare = async function(currentPassword){
    return await bcrypt.compare(currentPassword,this.password)
}

const User = mongoose.model("User",userschema);


export default User;