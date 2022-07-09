import React, { useEffect, useState,useRef,useCallback} from "react";
import Box from '@mui/material/Box';
import "./Data.css"
import { Stack, Typography } from "@mui/material";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroll-component';
import { color } from "@mui/system";

const Data = ()=>{

const [apidata,setapidata] = useState([])
const [showndata,setshowndata] = useState([])

// useEffect(()=>{
 
//  updateshowndata() 
// //  infinitescroll()
// },[apidata])

// useEffect(()=>{
// updateshowndata()
// console.log("bc")
// },[firstload])

// useEffect(()=>{
//     console.log("mann")
//  updateshowndata()
// },[firstload])




// useEffect(()=>{
// infinitescroll()
// },[])
// useState(()=>{
//   console.log(cametoend) 
//   if(cametoend){  
//  updateshowndata()
//  setcametoend(false)
//   }
// },[cametoend]) 

// const reference = useCallback(node=>{
// console.log("sick")

// if(showndata.length>0){ 
//     // setcametoend(false)   
// if(observer) observer.current.disconnect()
// observer.current = new IntersectionObserver((entries)=>{
//     const entry = entries[0]
//     console.log(entry)
//     if(entry.isIntersecting){
//         console.log("yay!")
//     }
// })
// if(node)observer.current.observe(node)
// }else{
//     return
// }

// },[cametoend])

// infinitescroll()

useEffect(()=>{
updateshowndata()
},[apidata])


// console.log(myRef.current)


const getapidata = async()=>{
    try {
        const res = await axios.get("https://api.github.com/repos/facebook/react/issues") 
        console.log(res.data)
        setapidata(res.data)
        // setfirstload(true)
         

     } catch (err) {
        console.log(err)
     } 
}



const updateshowndata=()=>{

    console.log("started")
    setTimeout(()=>{


     if(apidata.length-showndata.length>15){   
    let arr = [];
    for(let i=showndata.length;i<showndata.length+15;i++){
      arr.push(apidata[i])
    }
    setshowndata([...showndata,...arr])
}else{
    let arr = []
    for(let i=showndata.length;i<apidata.length;i++){
        arr.push(apidata[i])
    }
    setshowndata([...showndata,...arr])
}
},1000)
}

const daysago=(date)=>{
const givendate = new Date(date)
const todaydate = new Date()
const timediff  = -(givendate.getTime() - todaydate.getTime())

const daysdiff = timediff/(1000*60*60*24)
if(Math.floor(daysdiff)===0){
    const hours = daysdiff*24
    return [Math.floor(hours), "hours"]
}
if(Math.floor(daysdiff)===1){
return [Math.floor(daysdiff),"day"]
}else{
    return[Math.floor(daysdiff),"days"]
}
}


// window.onscroll = function(){
//     if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
//         updateshowndata()
//     }
// }

if(apidata.length===0){
    getapidata()
    
}
if(showndata.length===0){
    updateshowndata()
}

    console.log(showndata)
    return(
        <Box className="scroll">
            <Box className="dataheader">
              <Stack className="headertop" direction="row" spacing={2}>
                <Typography>625 Open</Typography>
                <Typography className="headertopfaint">10,104 Closed</Typography>
              </Stack>
              <Stack direction="row" spacing={2} className="headertop">
              <Typography className="headertopfaint">Author</Typography>
              <Typography className="headertopfaint">Label</Typography>
              <Typography className="headertopfaint">Projects</Typography>
              <Typography className="headertopfaint">Milestones</Typography>
              <Typography className="headertopfaint">Assignee</Typography>
              <Typography className="headertopfaint">Sort</Typography>
               
              </Stack>
            </Box>
            
            <InfiniteScroll
    dataLength={apidata.length}
    next={updateshowndata}
    hasMore={showndata<apidata}
    loader={<h4>Loading...</h4>}
    
    
  >

         {showndata.length>0 && showndata.map((x)=> 
           
             <Box key={x.id} className="datarow">
                <div className="dataheading">
                <Typography className="dataupline">{x.title}{x.labels.length>0 && x.labels.map((x)=><div key={x.id} style={{"background-color":`#${x.color}`}} className="label">{x.name}</div>
         )}</Typography>
                
                     <div className="image"><a href={x.repository_url}><img src={x.user.avatar_url} alt="no">

                    </img></a>
                    </div>

                    {x.comments ? <a href={x.comments_url}><div className="comments"><img className="im" src="comment.png" alt="m"></img>{x.comments}</div></a>:<></>}
                
                
                </div>
                <Typography className="datadownline" variant="p">#{x.number} opened {daysago(x.created_at)[0]} {daysago(x.created_at)[1]} ago by {x.user.login}</Typography>
            </Box>)}
            </InfiniteScroll>
            
        </Box>
    )
}

export default Data