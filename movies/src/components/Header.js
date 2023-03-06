import React, { useEffect, useState } from 'react'
import {AppBar, Toolbar,Box, Tabs, Tab, Autocomplete, TextField} from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie'
import { getAllMovies } from '../api-helper/api-helpers'
import { Link } from 'react-router-dom'
// import {Link,Routes,Route} from 'react-router-dom';
// const dummyArray=["IronMan","Pathaan","Selfie","ABCD"]

const Header = () => {
const [value,setvalue]=useState(0);
const [movies,setmovies]=useState([]);

useEffect(()=>{
getAllMovies().then((data)=>{
  setmovies(data.movies);
}).catch((err)=>{
console.log(err)
});
},[])
  return (
  <AppBar position="sticky" sx={{bgcolor:'#2b2b42'}}>
    <Toolbar>
  <Box width={"30%"}>
  <MovieIcon/>
  </Box>
    
    
    <Box width={"30%"} margin={"auto"}>
    <Autocomplete
       
        freeSolo
        options={movies.map((option) => option.title)}
        renderInput={(params) => <TextField sx={{input:{color:"white"}}} variant ='standard' {...params} placeholder="Search Movies" />}
      />
    </Box>
    <Box display={"flex"}>
    <Tabs textColor='inherit' indicatorColor='secondary' value={value} onChange={(e,val)=>{setvalue(val)}}>
    
    <Tab LinkComponent={Link} to='/movies' label ="All Movies"/>
    <Tab LinkComponent={Link} to='/auth' label="Auth"/>
    <Tab LinkComponent={Link} to='/admin' label="Admin"/>

        
    </Tabs>

    </Box>
    </Toolbar>
  
  </AppBar>
  )
}

export default Header
