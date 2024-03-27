import React, { useEffect, useState } from 'react'
import Blogs from './blogs';

const Blog = () => {
  const [blogs,setBlogs]=useState([]);
  const [loder,setLoder]=useState(false);
  useEffect(()=>{
    fetch('./blogs.json')
    .then(res=>res.json())
    .then(data => {
      setBlogs(data)
      setLoder(true)
    })
    .catch(error => console.error("Error fetching writer", error));
  },[])
  // console.log(blogs);
  return (
    <div>
      <div className='flex justify-center text-sky-500 bg-sky-50 py-4 rounded-md'>
        <h1 className='font-bold text-3xl'>Read Blogs</h1>
      </div>
      {
        loder?"":<div className='flex justify-center text-5xl mt-16'>
        <progress className="progress w-56"></progress>
        </div>
      }
      <div>
      {
        blogs.map((blog)=>{
          return <Blogs blog={blog}></Blogs>
        })
      }
    </div>
    </div>
  )
}

export default Blog
