import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

const Header = () => {
    return (
       <nav>
           <ul>
               <h3>House Helper</h3>
               <li><Link className='nav-link' to='/'>Home</Link></li>
               <li><Link className='nav-link'  to='/about'>About</Link></li>
               <li><Link className='nav-link'  to='/services'>Services</Link></li>
               <li><Link className='nav-link'  to='/login'>Login</Link></li>
               <li><Link className='nav-link'  to='/register'>Register</Link></li>
           </ul>
       </nav>
    )
}

export default Header
