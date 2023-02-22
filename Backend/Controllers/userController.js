const user=require("../Models/User");

const getallUser=async(req,res,next)=>{
    let users;
    try{
        users= await user.find();
    }
    catch(e){
        return next(e)
    }
    if(!users)
    {
        return res.status(500).json({
            message:"unexpected error occured!"
        })


    }
    return res.status(200).json({users})
};

module.exports=getallUser;
