import React from 'react'
import Slider from "react-slick";


const HeroSection = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className=' '>
  
    <Slider {...settings}>
      <div>
        <img className='w-full h-[500px] object-cover' src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg" alt="" />
      </div>
      <div>
        <img className='w-full h-[500px] object-cover' src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg" alt="" />
      </div>
      
    </Slider>
  </div>
  )
}

export default HeroSection