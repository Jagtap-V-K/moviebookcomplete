const Movies=require("../Models/Movie");
const jwt=require('jsonwebtoken');
const addMovies=async(req,res)=>{
    const extractToken= req.headers.authorization.split(" ")[1];

    if(!extractToken && extractToken.trim()===""){
        return res.status(401).json({
            message:"no Token provided"
        })
    }
    console.log(extractToken);
    let adminId;
    jwt.verify(extractToken,process.env.SECERT_KEY,(err,decrypted)=>{
        if(err)
        {
            return res.status(401).json({
                message:"Invalid Token",
            });
        }
        else{
            adminId=decrypted.id;
            return;
        }
    })
    const {title,description,releaseDate,posterUrl,featured,actors}=req.body;
    if(!title && title.trim() === "" && !description && description.trim()=== "" && !posterUrl&&posterUrl.trim()=== "")
    {
        return res.status(422).json({
            message:"Invalid Inputs"
        }) 
    }

    let movie;
    try{
        movie=new Movies({
            title,
            description,
            releaseDate: new Date(`${releaseDate}`),
            posterUrl,
            featured,
            admin:adminId,
            actors
        })
        movie=await Movies.save(true);
    }
    catch(err)
    {
        return res.send(err.message);
    }
    if(!movie)
    {
        return res.status(500).json({
            message:"something went wrong"
        })
    }
    return res.status(201).json({movie})
}

const getallMovies=async(req,res,next)=>{
    let movies;
    try{
        movies=await Movies.find();
    }
    catch(err){
        return res.send(err.message);
    }
    if(!movies)
    {
        return res.status(500).json({
            message:"something went wrong"
        })
    }
    return res.status(200).json({movies})

}
module.exports={addMovies,getallMovies}