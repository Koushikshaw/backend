const asyncHandler = (requestHandler)=>{
    (req,res,next)=>{
        Promise.ressolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}


export {asyncHandler}

/*

const asyncHandler = (fn)=>async (req,res,next)=>{
    try{
        await fn(req,res,next)
    }catch(err){
        res.status(err.cpde || 500).json({
            success : false,
            message : err.message
        })
    }
}

*/