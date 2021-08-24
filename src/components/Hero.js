import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

function Hero() {
    return (
        <>
        <StyledHeader>
            <div className="header-img">
            <img  src="https://www.softwareq.com/wp-content/uploads/2021/04/softwareq.png.webp" alt="" />
            </div>
            <div className="header-text">
                <h1>BLOG</h1>
            </div>
        </StyledHeader>
        <StyledHero>
              <motion.img 
              animate={{  borderRadius: [ "100%", "50%", "10%"], }}
              transition={{ duration: 0.9 }}  
              src="https://www.softwareq.com/wp-content/uploads/2021/04/happy-people-copy.png.webp" alt="" />
        </StyledHero>
        </>
    )
}
const StyledHeader = styled(motion.div)`
display: flex;
.header-img{
    img{
        width: 80%;
    }
    width: 30em;
}
.header-text{
    margin-left: -7em;
    color: white;
    margin-top: 1.2em;
}
`
const StyledHero = styled(motion.div)`
padding-top: 2em;
width: 80%;
margin: 0 auto;
margin-top: -3em;
    img{
        margin: 0 auto;
        height: 70vh;
        width: 100%;
        object-fit: cover;
        border-radius: 5em;
    }
    @media(max-width:300px){
        img{
            height: 30vh;
        }
    }
`
export default Hero
