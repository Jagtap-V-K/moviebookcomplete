const express=require('express');
const userRouter=express.Router();
const getallUser=require('../Controllers/userController');

userRouter.get('/',getallUser);


module.exports=userRouter;