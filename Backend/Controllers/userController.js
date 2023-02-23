const user=require("../Models/User");
const bcrypt=require("bcryptjs")
const getallUser=async(req,res,next)=>{
    let users;
    try{
        users= await user.find();
    }
    catch(e){
        return res.json(e);
    }
    if(!users)
    {
        return res.status(500).json({
            message:"unexpected error occured!"
        })


    }
    return res.status(200).json({users})
};

const addUser=async(req,res,next)=>{
const {name,email,password}=req.body;
if(!name&&name.trim()=== "" && !email&&email.trim()==="" && !password&&password.trim()==="")
{
    return res.status(400).json({message:"Invalid Input data"});
    
}
const hashedPassword=bcrypt.hashSync(password);
let users;
try{
    users=new user({name,email,password:hashedPassword});
    await users.save();

}
catch(e)
{
    return res.json({e});
}
if(!users)
{
    return res.status(500).json({message:'unexpected error'});
}
return res.status(200).json({users})
}

const updateUser=async(req,res,next)=>{
 const id=req.params.id;
 const {name,email,password}=req.body;
if(!name&&name.trim()=== "" && !email&&email.trim()==="" && !password&&password.trim()==="")
{
    return res.status(422).json({message:"Invalid Input data"});
    
}
let users;
try{
users=user.findByIdAndUpdate(id,{name,email,password:hashedPassword});


}
catch(err)
{
    return res.json(err.message);
}
if(!users){
return res.status(500).json({message:"unexpected User"})
}
res.status(200).json({message:"Updated User",
User:users});
}

const deleteUser=async(req,res,next)=>{
    
}

module.exports={getallUser,addUser,updateUser}
