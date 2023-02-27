const express=require('express');
const bookingRouter=express.Router();
const Bookings=require('../Controllers/bookingController')

bookingRouter.post('/',Bookings);

module.exports=bookingRouter;