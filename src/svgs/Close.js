import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'


function Close() {
    return (
        <StyledSvg>
        <svg viewBox="0 0 349 349" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
        <path d="M336.559 68.6093L231.016 174.163L336.559 279.712C352.258 295.417 352.258 320.857 336.559 336.562C328.715 344.406 318.431 348.331 308.152 348.331C297.856 348.331 287.571 344.412 279.733 336.562L174.167 231.001L68.6093 336.561C60.7663 344.405 50.4813 348.33 40.1933 348.33C29.9083 348.33 19.6302 344.411 11.7802 336.561C-3.91875 320.863 -3.91875 295.422 11.7802 279.711L117.32 174.162L11.7743 68.6093C-3.92475 52.9103 -3.92475 27.4643 11.7743 11.7653C27.4703 -3.92175 52.9012 -3.92175 68.6032 11.7653L174.166 117.319L279.721 11.7653C295.426 -3.92175 320.86 -3.92175 336.553 11.7653C352.258 27.4643 352.258 52.9103 336.559 68.6093Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0">
        <rect width="348.333" height="348.334" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        </StyledSvg>
    )
}
const StyledSvg = styled(motion.div)`
   svg{
       width: 10%;
   }    
`
export default Close
