const express=require('express');
const app=express();
require('dotenv').config();


// DB CONNECTION
const Connection=require('./utils/dbConnect');
Connection();

const UserRouter=require('./routes/userRoutes');
const adminRouter = require('./routes/adminRoutes');
const movieRouter = require('./routes/moviesRoutes');

// PORT NUMBER 
const PORT=process.env.PORT;

// middleware routes
app.use(express.json());
app.use('/users',UserRouter);
app.use('/admin',adminRouter);
app.use('/movies',movieRouter);


app.listen(PORT,()=>{
    console.log(`SERVER RUNNING ON ${PORT}`);
})