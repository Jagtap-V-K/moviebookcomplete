const express=require('express');
const app=express();
require('dotenv').config();
const Connection=require('./utils/dbConnect');
Connection();
const UserRouter=require('./routes/userRoutes');

const PORT=process.env.PORT;
app.use(express.json());
app.use('/users',UserRouter);



app.listen(PORT,()=>{
    console.log(`SERVER RUNNING ON ${PORT}`);
})