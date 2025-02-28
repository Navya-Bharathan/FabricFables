import React from 'react'
import PopularCarousel from '../../components/layout/Carousel/PopularCarousel';
import NewArrivalCarousel from '../../components/layout/Carousel/NewArrivalCarousel';
import products from '../../data/products';
import './Home.css';
const Home = () => {
  
  return (
    <div className='home-page-container'>

      <div className='home-page-banner-image'>
         
      </div>

      <div className='home-carasoul-container'> 
        <h1>Our Popular Products </h1>
            <PopularCarousel products={products}/>
      </div>
      <div className='home-carasoul-container'> 
        <h1>New Arrival </h1>
            <NewArrivalCarousel products={products}/>
      </div>

    </div>
  ) 
}

export default Home