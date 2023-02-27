const express=require('express');
const userRouter=express.Router();
const {getallUser,addUser,updateUser, deleteUser, login}=require('../Controllers/userController');
const user = require('../Models/User');


userRouter.get('/',getallUser);
userRouter.post('/signup',addUser);
userRouter.put("/:id",updateUser);
userRouter.delete('/:id',deleteUser);
userRouter.post('/login',login);

module.exports=userRouter;