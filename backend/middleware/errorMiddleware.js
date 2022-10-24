const errorHandler = (err,req,res,next)=>{
    const statusCode = res.statuCode === 200? 500:statuCode;
    res.status(statusCode);
    res.json({
        message:err.message,
        stack:process.env.NODE_ENV ==="Production"?null :err.stack
    })
}

module.exports = {errorHandler}