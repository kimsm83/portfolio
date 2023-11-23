import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <section id='navbar'>
      <div className='nav_container'>
        <Link to='/'>
          <h1>Portfolio</h1>
        </Link>
        <ul className='nav-menu'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Navbar