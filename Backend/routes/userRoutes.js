const express=require('express');
const userRouter=express.Router();
const {getallUser,addUser,updateUser}=require('../Controllers/userController');


userRouter.get('/',getallUser);
userRouter.post('/signup',addUser);
userRouter.put("/:email",updateUser);


module.exports=userRouter;