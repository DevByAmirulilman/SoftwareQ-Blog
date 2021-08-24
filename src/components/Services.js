import React from 'react'
import styled  from 'styled-components'
import {motion} from 'framer-motion'
import Instagram from '../svgs/Instagram'
import Website from '../svgs/Website'
import OurServices from '../svgs/OurServices'


function Services() {
    const navAnim = { hidden: { opacity: 0,} ,visible:{opacity:1} }
    const navItems = { hidden: { x: -100, opacity: 0 },visible:{ x: 0,opacity:1} }
    return (
        <motion.div variants={navAnim} initial="hidden" animate="visible" transition={{ ease: "easeOut", duration: 2 }}>
        <StyledImage>
            <motion.div className="services" variants={navItems} initial="hidden" animate="visible"  transition={{ ease: "easeOut", duration: 1 }}>
            <a href="https://www.instagram.com/softwareqhq/"><Instagram/></a>
            </motion.div>
            <motion.div className="services" variants={navItems} initial="hidden" animate="visible"  transition={{ ease: "easeOut", duration: 1 }}>
            <a href="https://www.softwareq.com/"><Website/></a>
            </motion.div>
            <motion.div className="services" variants={navItems} initial="hidden" animate="visible"  transition={{ ease: "easeOut", duration: 1 }}>
            <a href="https://www.softwareq.com/softwareq-services/"><OurServices/></a>
            </motion.div>
        </StyledImage>
        </motion.div>
    )
}

const StyledImage = styled(motion.div)`
    display: flex;
    justify-content:space-evenly;
    width: 80%;
    margin: 0 auto;
    margin-top: 1.8em;
    padding-bottom: 1em;
    .services{
        margin: 0 auto;
        height: 15vh;
        width: 10%;
        color: white;
    h1{
        text-align: center;
        color: white;
    }
    
    }
    
`

export default Services
