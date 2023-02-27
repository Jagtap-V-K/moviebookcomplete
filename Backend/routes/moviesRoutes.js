const express=require('express');
const movieRouter=express.Router();
const {addMovies,getallMovies}=require("../Controllers/movieController");


movieRouter.post("/add",addMovies);
movieRouter.get("/",getallMovies)

module.exports=movieRouter;
