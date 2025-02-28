import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-about-container'>
               <h1>Fabric Fables</h1>
               <p>Discover trendy and affordable fashion at [Store Name], your go-to online clothing store for stylish apparel. From casual wear to elegant outfits, we offer high-quality pieces that keep you looking your best every season.</p>
        </div>
        <div className='quick-links-container'>
            <h3>Quick Linkes</h3>
            <ul>
              <li>Shop</li>
              <li>Terms and Services</li>
              <li>Our Story</li>
              <li>Privacy Ploicy</li>
              <li>Contact Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer