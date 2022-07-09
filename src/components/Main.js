import React from "react";
import { ReactDOM } from "react";
import Box from '@mui/material/Box';
import "./Main.css";
import { Button, Stack, Typography } from '@mui/material';
import Data from "./Data";


const Main = ()=>{
  return(
    <>
    <Box className="header">
        <Box className="headertopbtns">
            <Stack sx={{padding:"0 0 0 1rem"}} direction="row" spacing={1}>
               <Typography variant="h6">$$</Typography>
              <Typography variant="h5" sx={{color:"#4078c0"}}>facebook/react </Typography>
              
              <Box className="onepublicIcon">Public</Box>
            </Stack>
            <Stack direction="row" spacing={1.3}>
            <Box className="publicIcon">Notifications</Box>
            <Stack direction="row"> <Box className="publicIcon planeborder">Star</Box>
            <Box className="publicIcon extraproperties">125k</Box>
            </Stack>
            <Stack direction="row"> <Box className="publicIcon planeborder">Fork</Box>
            <Box className="publicIcon extraproperties">35.3k</Box></Stack>

            </Stack>
        </Box>
        <Box className="headerbtns">
        <div className="headerbottombtns" variant="text">Code</div>
        <div className="headerbottombtns active" variant="text" >Issues</div> 
        <div className="headerbottombtns" variant="text">Pull requests</div> 
        <div className="headerbottombtns" variant="text">Actions</div> 
        <div className="headerbottombtns" variant="text">Projects</div> 
        <div className="headerbottombtns" variant="text">Wiki</div> 
        <div className="headerbottombtns" variant="text">Security</div> 
        <div className="headerbottombtns" variant="text">Insights</div>  
        </Box>
        
    </Box>
    
    <Data />
    </>
  )

}

export default Main