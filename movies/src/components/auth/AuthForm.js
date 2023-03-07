import { Button, Dialog, FormLabel, IconButton, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
const labelStyle={mt:1,mb:1};
const AuthForm = () => {
    const [isSignup, setisSignup] = useState(false);
    



  return (
   <Dialog paperProps={{style:{borderRadius:20}}}open={true}>
   <Box sx={{ml:'auto',padding:1}}> 
    <IconButton>
        <CloseRoundedIcon/>
    </IconButton>
    
   </Box>
    <Typography variant='h4' textAlign={'center'}>
    {isSignup?'Signup':'login'}
    </Typography>
    <form>
        <Box display="flex" justifyContent={'center'} flexDirection='column' width={400} margin='auto' alignItems={'center'} padding={4}>
           { isSignup &&<><FormLabel sx={labelStyle}>Name</FormLabel>
            <TextField variant='standard' margin='normal'  type={'text'} name='name'/> </>}

            <FormLabel sx={labelStyle}>Email</FormLabel>
            <TextField variant='standard' margin='normal'  type={'email'} name='email'/>
            <FormLabel sx={labelStyle}>Password</FormLabel>
            <TextField variant='standard' margin='normal'  type={'password'} name='password'/>
            <Button sx={{mt:2,borderRadius:10,bgcolor:'#2b2d42'}}type="submit" fullWidth variant='contained'> {isSignup?'Signup':'login'} </Button>
            <Button onClick={()=>{
                setisSignup(!isSignup)
            }} sx={{mt:2,borderRadius:10}} fullWidth > Switch To {isSignup?"Login":"Signup"}</Button>
        </Box>
    </form>
   </Dialog>
  )
}

export default AuthForm
