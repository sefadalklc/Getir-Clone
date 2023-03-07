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
    <div className='relative before:bg-gradient-to-r before:from-primary-brand-color  before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10'>
  
    <Slider {...settings}>
      <div>
        <img className='w-full h-[500px] object-cover' src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg" alt="" />
      </div>
      <div>
        <img className='w-full h-[500px] object-cover' src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg" alt="" />
      </div>
      
    </Slider>
    <div className='container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20'>
        <div className='flex flex-col gap-y-8'>
        <img height={180} width={180}
						     src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
						     alt=""/>

            <h3 className="text-4xl font-semibold tracking-tighter	 text-white">
							Dakikalar içinde <br/> kapınızda
						</h3>
        </div>
    </div>
  </div>
  )
}

export default HeroSection