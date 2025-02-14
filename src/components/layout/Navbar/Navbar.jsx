import React from 'react'

import Logo from '../../../assets/Logo1.png'
import { FaOpencart } from "react-icons/fa";
import { PiGlobeThin } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='logo'>
          <img src={Logo} alt='Fabric Fables'/>
        </div>
        <div className='navbar-page-links-div'>
        <ul className='navbar-page-links'>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/lookBook">Look Book</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
        </div>
        <div className='navbar-icon-links-div'>
            <ul className='navbar-icon-links'>
                <li><PiGlobeThin/></li>
                <li><FaRegHeart /></li>
                <li><FaOpencart /></li>

            </ul>
        </div>
    </nav>
  )
}

export default Navbar