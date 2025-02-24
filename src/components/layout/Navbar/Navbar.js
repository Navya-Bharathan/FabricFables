import React from 'react'
import {Link} from 'react-router-dom';

import Logo from '../../../assets/Logo1.png'
import { FaOpencart } from "react-icons/fa";
import { PiGlobeThin } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='logo'>
         <Link to="/"><img src={Logo} alt='Fabric Fables'/></Link>
        </div>
        <div className='navbar-page-links-div'>
        <ul className='navbar-page-links'>
            <li><Link to="/men">MEN</Link></li>
            <li><Link to="/women">WOMEN</Link></li>
            <li><Link to="/kids">KIDS</Link></li>
            <li><Link to="/decore">HOME</Link></li>
           
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