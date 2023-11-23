import React from 'react'

import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <section id='navbar'>
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
    </section>
  )
}

export default Navbar