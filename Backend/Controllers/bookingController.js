const Bookings=require('../Models/Booking');

const Booking=async(req,res,next)=>{
    const {movie,date,seatNumber,user}=req.body;
    let newBooking;
    try{
        newBooking=new Bookings({
            movie,
            date:new Date(`${date}`),
            seatNumber,
            user
        });
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
module.exports=Booking;