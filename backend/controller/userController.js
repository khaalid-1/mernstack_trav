import asycnHandler from  "express-async-handler";
import User from "../model/userModel.js"
import jwb from "jsonwebtoken";
import {config} from "../config/config.js";

// @des Register user 
// @route POST /api/v1/user/
// Access Public

export const registeruser = asycnHandler(async(req,res)=>{
    const {name,email,password} = req.body;

    if(!name || !email  || !password){
        res.status(400)
        throw new Error('Please fill all fileds');
    }
    const newUser = new User(req.body);
    await newUser.save();
    res.json({status:true,data:newUser})
})
// @des Login user 
// @route POST /api/v1/user/login
// Access Public
export const loginUser =  asycnHandler(async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        res.status(400)
        throw new Error("user email not found ")
    }

    const ismatch = await user.compare(password);
    if(!ismatch){
        res.status(400)
        throw new Error("password not match")
    }
    res.json({
       email:user.email,
       name:user.name,
       token:generateToken(user.id)
    })
})
// @des Get user  data
// @route GET /api/v1/user/login
// Access Public
export const getme =  asycnHandler(async(req,res)=>{
    const users = await User.find({});

    res.json({status:true,date:users})
})

const generateToken = (id)=>{
    return jwb.sign({id},config.secretToken, { expiresIn: '1h' })
}