import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination} from "swiper/modules";
import Cards from '../../common/Cards/Cards';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Carousel.css"

const Carousel = ({products}) => {
 
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={80}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true, 
      }}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 1, 
        },
        768: {
          slidesPerView: 2, 
        },
        1024: {
          slidesPerView: 3, 
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      
    >
      {products.filter((product) => product.popular) 
      .map((product) => (
        <SwiperSlide key={product.id}> {/* Ensure unique `key` prop */}
          <Cards product={product} /> {/* Pass the product data as prop */}
        </SwiperSlide>
      ))}

    </Swiper>
  )
}

export default Carousel