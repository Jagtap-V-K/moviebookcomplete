const  mongoose  = require('mongoose');
const Bookings=require('../Models/Booking');
const Movies = require('../Models/Movie');
const users=require('../Models/User');

const Booking=async(req,res,next)=>{
    const {movie,date,seatNumber,user}=req.body;
    let exisitingMovie;
    let exisitingUser;
    try{
        exisitingMovie=await Movies.findById(movie);
        exisitingUser=await users.findById(user);
    }   
    catch(e)
    {
        return res.send(e.message);
    }
    if(!exisitingMovie)
    {
        return res.status(404).json({message:"Movie not found by given id"});
    }
    if(!exisitingUser)
    {
        return res.status(404).json({message:"User not found by given id"});
    }
    let newBooking;
    try{
        newBooking=new Bookings({
            movie,
            date:new Date(`${date}`),
            seatNumber,
            user
        });


        const session= await mongoose.startSession();
         session.startTransaction();
        exisitingUser.bookings.push(newBooking)
        exisitingMovie.bookings.push(newBooking);
        newBooking=await newBooking.save();
      
    }
    catch(e)
    {
        res.send(e.message);
    }

    if(!newBooking)
    {
        res.status(400).json({
            message:"something Went Wrong"
        })
    }
    return res.status(201).json({newBooking});
}




const getbookbyId=async(req,res)=>{
    
}
module.exports=Booking;