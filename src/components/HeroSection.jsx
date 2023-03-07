import React , {useState} from 'react'
import {FaFacebook} from "react-icons/fa"
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";

const HeroSection = () => {

  const [selected, setSelected] = useState("TR");

  const flags = {
		US: '+1',
		GB: '+5',
		FR: '+70',
		DE: '+30',
		IT: '+11',
		TR: '+90',
	}

  const settings = {
    infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		cssEase: 'linear',
		arrows: false,
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
        <div className='w-[400px] rounded-lg bg-gray-50 p-6'>
        <h3 className="text-center mb-4 font-semibold text-purple-600">Giriş yap veya kayıt ol</h3>
         <div className='grid gap-y-2'>

         <div className='flex gap-x-2'>
          <ReactFlagsSelect
									countries={Object.keys(flags)}
									customLabels={flags}
									selected={selected}
									onSelect={code => setSelected(code)}
                  className="flag-select"
								/>
                <label className='flex-1 relative block'>
                  <input required className='h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer text-sm focus:pt-2' />
                  <span
										className="absolute top-0 left-0 h-full flex items-center px-4 text-sm text-gray-500 transition-all group-focus-within:h-7 group-focus-within:text-xs group-focus-within:text-purple-600  peer-valid:h-7 peer-valid:text-xs peer-valid:text-purple-600">
									Telefon Numarası  </span>
                </label>
          </div>
          <button className="h-12  bg-brand-yellow flex items-center justify-center  w-full    rounded-lg transition-colors bg-yellow-300 text-purple-700 text-sm font-semibold hover:bg-purple-700 hover:text-yellow-300">
								Telefon numarası ile devam et
							</button>
              <hr className='h-[1px] bg-gray-300 my-2'/>
              <div>
              <button className="h-12  bg-blue-700 bg-opacity-10 text-blue-700 flex items-center justify-center  w-full px-4   rounded-lg transition-colors bg-yellow-300 text-purple-700 text-sm font-semibold hover:bg-blue-700 hover:text-white">
								<FaFacebook size={24} />
                
                <span className='mx-auto'>Facebook ile devam et </span>
							</button>
              </div>
         </div>
        </div>
    </div>
  </div>
  )
}

export default HeroSection