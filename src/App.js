import React,{useState,useEffect} from 'react'
import Home from './pages/Home';
import styled from 'styled-components'
import {motion} from 'framer-motion'
import GlobalStyle from './components/GlobalStyle';
import axios from 'axios';

function App() {
  const [blog,setBlog]=useState([]);
  let id;
  useEffect(()=>{
      axios.get(`https://softwareq-merdeka-api.azure-api.net/blog/v1/ById?id=${id}&softwareq-apim-subscription-key=b25cfd446b284516bfdbf954e6ca3f02`)
      .then((data)=>{
        setBlog(data.data);
        console.log(data.data)
      })
      .catch(err=>console.log(err))
    },[])
     
  return (
    <StyledApp>
      <GlobalStyle/>
      <Home id={id} blog={blog} setBlog={setBlog}/>
    </StyledApp>
  );
}
const StyledApp=styled(motion.div)`
     background: #17181f;
     padding-bottom: 5em;

;
`
export default App;
