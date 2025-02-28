import React, { useState } from 'react'
import './cards.css'
import QuickSelection from '../QuickSelection/QuickSelection';

const Cards = ({product}) => {
  const [isHovered,setIsHovered]=useState(false);
  return (
    <div className="card-container" >
      
         <img className='product-image' src={product.image} alt={product.keywords} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} />
         {isHovered &&<QuickSelection/> }
      
      <h2 className='product-name'>{product.title}</h2>
      <h3 className='product-keywords'>{product.keywords}</h3>
      
    </div>
  )
}

export default Cards