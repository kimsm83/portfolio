import React from 'react'

import img1 from '../../assets/img/react_blog.png'
import Navbar from '../../components/Navbar'

const Blog = () => {
  return (
    <section id='blog'>
      <Navbar/>
      <div className='container_blog'>
        <div className='left_content'>
          <div>blog</div>
          <div>개발 공부를 진행하며 작성한 티스토리 블로그11111112222222223333333333333333333334444444444444444</div>
        </div>
        <div className='right_content'>
          <div className='blog_content'>
            <div className='img_box'><img src={img1}/></div>
            <div>제목</div>
            <div>내용</div>
          </div>
          <div className='blog_content'>
            <div className='img_box'><img src={img1}/></div>
            <div>제목</div>
            <div>내용</div>
          </div>
          <div className='blog_content'>
            <div className='img_box'><img src={img1}/></div>
            <div>제목</div>
            <div>내용</div>
          </div>
          <div className='blog_content'>
            <div className='img_box'><img src={img1}/></div>
            <div>제목</div>
            <div>내용</div>
          </div>          
        </div>
      </div>
    </section>
  )
}

export default Blog