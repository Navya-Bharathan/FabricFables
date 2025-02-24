import React from 'react'
import './cards.css'

const Cards = ({product}) => {
  return (
    <div className="card-container">
      <img className='product-image' src={product.image} alt={product.keywords}/>
      <h2 className='product-name'>{product.title}</h2>
      <h3 className='product-keywords'>{product.keywords}</h3>
      
    </div>
  )
}

export default Cards