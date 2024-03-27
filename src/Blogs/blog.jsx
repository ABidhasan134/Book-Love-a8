import React, { useEffect, useState } from 'react'
import Blogs from './blogs';

const Blog = () => {
  const [blogs,setBlogs]=useState([])
  useEffect(()=>{
    fetch('./blogs.json')
    .then(res=>res.json())
    .then(data => setBlogs(data))
    .catch(error => console.error("Error fetching writer", error));
  },[])
  // console.log(blogs);
  return (
    <div>
      {
        blogs.map((blog)=>{
          return <Blogs blog={blog}></Blogs>
        })
      }
    </div>
  )
}

export default Blog
