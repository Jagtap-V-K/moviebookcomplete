const express=require('express');
const adminRouter=express.Router();
const {addAdmin,adminlogin,getAdmins}=require('../Controllers/adminController');


adminRouter.post("/signup",addAdmin);
adminRouter.post("/login",adminlogin);
adminRouter.get('/',getAdmins);


module.exports=adminRouter;