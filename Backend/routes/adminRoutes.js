const express=require('express');
const adminRouter=express.Router();
const {addAdmin,adminlogin}=require('../Controllers/adminController');
adminRouter.post("/signup",addAdmin);
adminRouter.post("/login",adminlogin);


module.exports=adminRouter;