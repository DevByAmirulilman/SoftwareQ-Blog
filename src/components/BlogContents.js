
import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Close from '../svgs/Close';

const BlogContents=({title,date,createdBy,content,setBlog})=> {
  const closeHandler=()=>{
      setBlog(false)
  }
    return (
        <StyledBorder animate={{opacity:1}} initial={{opacity:0}} transition={{duration:0.9}}>
        <div className="header">
            <div className="title-container">
                <div className="title">
                    <h2>{title}</h2>
                    <div className="container">
                    <div className="createdby">
                    <h3> <span>By</span> {createdBy}</h3>
                    </div>
                    <div className="date-container">
                    <h3>{ (new Date(date)).toLocaleDateString() }</h3>
                    </div> 
                    </div>
                 </div>
            </div>
           <motion.div 
           initial={{x:0}}
           animate={{x:200}}
           className="close-btn" 
           onClick={closeHandler}
           whileHover={{
            y:4,
            transition: { duration: 0.5 },
          }}
           >
            <Close/>
            </motion.div>
        </div>
        <div className="content">
            <p>{content}</p>
        </div>
        <img src="https://www.softwareq.com/wp-content/uploads/2021/04/softwareq.png.webp" alt="" />
        </StyledBorder>
    )
}
const StyledBorder=styled(motion.div)`
margin-top: 1em;
background: linear-gradient(180deg, #6C71CC 4.67%, #CC68C2 91.08%);
color: white;
border-radius: 10%;
padding: 3em;
height: 70vh;
width: 80%;
margin: 2em auto;
img{
    width: 60%;
    margin-left: 31em;
    margin-top: 10em;
}
.title-container{
    display: flex;
}
.header{
    display: flex;
    justify-content:space-between;
}
.container{
    display: flex;
}
.title{
    
    h2{
        color: #000000;
    }
}
.content{
  p{
      font-size: 2rem;
  }
}
.createdby{
    font-family: 'Style Script', cursive;
    color: black;
    span{
        color: white;
    }
    h3{
        font-size: 1.8rem;
    }
}
.close-btn{
    cursor: pointer;
}
.date-container{
    margin-left: 1em;
    margin-top: 0.5em;
}
`
export default BlogContents;
