
// @des Register user 
// @route POST /api/v1/user/
// Access Public
export const registeruser = (req,res)=>{
    res.json({message: "Create user"})
}
// @des Login user 
// @route POST /api/v1/user/login
// Access Public
export const loginUser = (req,res)=>{
    res.json({message: "login user"})
}
// @des Get user  data
// @route GET /api/v1/user/login
// Access Public
export const getme = (req,res)=>{
    res.json({message: "get me user"})
}