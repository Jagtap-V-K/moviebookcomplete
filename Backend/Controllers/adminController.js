const admin=require('../Models/admin');
const bcrypt=require('bcryptjs');
const addAdmin=async(req,res,next)=>{
    const {email,password}=req.body;

    let existingAdmin;
    try{
        existingAdmin= await admin.findOne({email});
    }
    catch(e)
    {
        return res.send(err);
    }
    if(existingAdmin)
    {
        return res.status(400).json({message:"Admin already exists"});

    }
    let admins;
    const hashedPassword=bcrypt.hashSync(password);
    try{
        admins=new admin({email,password:hashedPassword})
        admins=await admin.save();

    }
    catch(err)
    {
        res.send(err.message);
    }
    if(!admins){
        return res.status(400).json({message:"unable to create admin"});
    }
    res.status(201).josn({message:"Admin Create"});

}

const adminlogin=async(req,res)=>{
    const {email,password}=req.body;

    if(!email&&email.trim()==="" && !password&&password.trim()==="")
{
    return res.status(400).json({message:"Invalid Input data"});
    
}
let existingAdmin;
try{
    existingAdmin=await admin.findOne({email})
}
catch(err)
{
    return res.send(err);
}
if(!existingAdmin)
{
    return res.status(401).json({message:"admin not found"});
}
const isPasswordCorrect=bcrypt.compareSync(password,existingAdmin.password);
if(!isPasswordCorrect)
{
    return res.status(400).json({message:"invalid password"});
}
const token=jwt.sign({id:existingAdmin._id},process.env.SECERT_KEY,{
    expiresIn:"7d"
})

res.status(200).josn({message:"Login Succesfull",token,id:existingAdmin._id});
}




module.exports={addAdmin,adminlogin}