const express=require('express');
const userRouter=express.Router();
const {getallUser,addUser,updateUser, deleteUser, login}=require('../Controllers/userController');
const user = require('../Models/User');


userRouter.get('/',getallUser);
userRouter.post('/signup',addUser);
userRouter.put("/:email",updateUser);
userRouter.delete('/:id',deleteUser);
userRouter.post('/',login);

module.exports=userRouter;