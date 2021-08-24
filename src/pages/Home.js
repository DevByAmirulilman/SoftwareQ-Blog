import React from 'react'
import BlogList from '../components/BlogList'
import Hero from '../components/Hero'
import Services from '../components/Services'


function Home({id,blog,setBlog}) {
    return (
        <div>
          <Hero/>
          <Services/>
          <BlogList id={id} blog={blog} setBlog={setBlog}/>
         
        </div>
    )
}

export default Home
