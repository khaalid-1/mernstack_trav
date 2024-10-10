
const errorHandler = (err,req,res,next)=>{
    const statusCode = res.statusCode ? res.statusCode : 5000;
    res.status(statusCode);
    res.json({
        error : err.message,
        stack : process.env.NODE_ENV
    })
}