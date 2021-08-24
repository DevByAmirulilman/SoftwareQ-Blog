import React,{useState,useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import BlogContents from './BlogContents';

const BlogList=()=> {
    const [blogList,setBlogList]=useState([]);
    const [blogContent,setBlogContent]=useState([]);
    const [blog,setBlog]=useState(false);
    useEffect(()=>{
        axios.get('https://cors-anywhere.herokuapp.com/https://softwareq-merdeka-api.azure-api.net/blog/v1/ListAll', {
            headers:{'softwareq-apim-subscription-key':'b25cfd446b284516bfdbf954e6ca3f02'}
          }).then(response => {
            setBlogList(response.data)
          }).catch((e) => {
            console.log(e);
            console.log('error');
          })
    },[])

    const blogHandler=(value)=>{
      let id = value;
      axios.get(`https://softwareq-merdeka-api.azure-api.net/blog/v1/ById?id=${id}&softwareq-apim-subscription-key=b25cfd446b284516bfdbf954e6ca3f02`)
      .then(response=>{
        setBlogContent(response.data);
       console.log(response.data);
      setBlog(true);
      })
    }

  
    return (
      
        <div>
           {blog?<BlogContents setBlog={setBlog} blogContent={blogContent} date={blogContent.createdAtDateTimeOffset} createdBy={blogContent.createdBy} title={blogContent.title} content={blogContent.content} copyrightOwner={blogContent.copyrightOwner}/>:""} 
           {
             blogList.map(blogs=>
              (
               <StyledBlogList 
               key={blogs.id}  
               onClick={()=>blogHandler(blogs.id)} 
               animate={{opacity:1,scale:1}} initial={{opacity:0,scale:1.2}} transition={{duration:0.9}}
               whileHover={{
                scale: 1.08,
                transition: { duration:0.5 },
              }}
              whileTap={{ scale: 0.9 }}
               >
                 <div className="blogtitle">
                    <h3>{blogs.title}</h3>
                    <span>{ (new Date(blogs.createdAtDateTimeOffset)).toLocaleDateString() }</span>
                 </div>
                 <div className="contents">
                    <h1>{blogs.content}</h1>
                 </div>
                <div className="createdby">
                    <h3><span>By</span> {blogs.createdBy}</h3>  
                </div>   
                <img src="https://www.softwareq.com/wp-content/uploads/2021/04/softwareq.png.webp" alt="" />
               </StyledBlogList>
             ))
           }
          
        </div>
    )
}
const StyledBlogList=styled(motion.div)`
  background: linear-gradient(180deg, #6C71CC 4.67%, #CC68C2 91.08%);
  width: 80%;
  margin: 3em auto;
  border-radius: 1em;
  padding: 1em;
  cursor: pointer;
  
  .blogtitle{
    margin-left: 1.8em;
    color: white;
    display: flex;
    justify-content: space-between;
    span{
      font-family: 'Style Script', cursive;
      font-size: 1.3rem;
      margin-right:1rem;
    }
  }
  .contents{
    margin-left: 1.8em;
    h1{
      font-size: 2.5rem;
    }
  }
  .createdby{
    margin-left: 1.8em;
    font-family: 'Style Script', cursive;
    display: flex;
    justify-content: space-between;
    span{
      color: white;
    }
  }
  img{
    width: 25%;
    margin-left: 57em;
    object-fit: cover;
  }
`
export default BlogList
