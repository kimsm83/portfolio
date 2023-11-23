import React from 'react'
import { blogContent } from '../constant/index'
import Navbar from './Navbar'

const Blog = () => {
  return (
    <section id='blog'>
      <Navbar/>
      <div className='container_blog'>
        <div className='left_content'>
          <div>blog</div>
          <div>개발 공부를 진행하며 작성한 티스토리 블로그</div>
        </div>
        <div className='right_content'>
          {blogContent.map((blog, key) => {
            return (
            <div className='blog_content' key={key}>
              <div className='img_box'>
                <img src={blog.img} alt={blog.title}/>
              </div>
              <div className='title'>{blog.title}</div>
              <div className='content'>{blog.content}</div>
            </div>            
          )})}
                   
        </div>
      </div>
    </section>
  )
}

export default Blog