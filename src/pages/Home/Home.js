import React from 'react'
import Carousel from '../../components/layout/Carousel/Carousel';
import products from '../../data/products';
import './Home.css';
const Home = () => {
  console.log(products.name)
  return (
    <div className='home-page-container'>

      <div className='home-page-banner-image'>
         
      </div>

      <div className='home-carasoul-container'> 
        <h1>Our Popular Products </h1>
        
        <Carousel products={products}/>
      </div>

    </div>
  ) 
}

export default Home