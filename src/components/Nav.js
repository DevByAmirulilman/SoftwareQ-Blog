import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

function Nav() {
    return (
        <div>
            <StyledNav>
                <motion.a
                whileHover={{ scale: 1.1 ,color:"rgba(113, 113, 204, 1)"}}
                whileTap={{ scale: 0.9 }}>
                Home</motion.a>
                <motion.a 
                whileHover={{ scale: 1.1,color:"rgba(113, 113, 204, 1)"} }
                whileTap={{ scale: 0.9 }}>
                News</motion.a>
                <motion.a
                whileHover={{ scale: 1.1,color:"rgba(113, 113, 204, 1)"} }
                whileTap={{ scale: 0.9 }}>
                About</motion.a>
                <motion.a
                whileHover={{ scale: 1.1,color:"rgba(113, 113, 204, 1)"} }
                whileTap={{ scale: 0.9 }}>
                    Form
                </motion.a>
            </StyledNav>
        </div>
    )
}
const StyledNav = styled(motion.nav)`
  display  :flex ;
  justify-content: space-evenly;
  font-size: 2.5rem;
  color: #ffffff;
  font-family: 'Redressed', cursive;
  a:hover{
      cursor: pointer;
  }
`
export default Nav
