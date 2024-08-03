import React, { useEffect, useState } from 'react'
import { TiMediaPlayReverse } from "react-icons/ti";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { Autoplay, } from 'swiper/modules';
import axios from 'axios';

function BrandsMain() {
   
    const[BrandsMainApi, setBrandsMainApi] = useState(null)
    
    const BrandsApi = async () => {
        const {data} = await axios.get('https://rune-dramatic-basil.glitch.me/brands')
        setBrandsMainApi(data)
    }
    useEffect(() => {
        BrandsApi()
    } ,[])
    
  return (
    <section className='w-full min-h-[40vh] flex justify-center items-center bg-[#EEEFEF]'>
        <div className='w-[90%] min-h-[40vh] flex items-center justify-center gap-5 px-2 flex-col max-md:w-[100%] max-md:px-0'>
            <p className='text-5xl max-md:text-4xl max-sm:text-3xl'> معرفی  برند ها </p>
            <Swiper
            slidesPerView='auto'
            spaceBetween={20}
            pagination={{
            clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className='w-full h-full py-5 px-2'
            >
                {BrandsMainApi?.map((item) => (
                    <SwiperSlide className='w-40 h-32 bg-white rounded-xl shadow-lg flex justify-center items-center flex-col p-5 gap-1 cursor-pointer hover:backdrop-opacity-95 max-md:w-32 max-md:h-28' key={item.id}>     
                        <img src={item.img} className='w-full h-full object-contain mix-blend-multiply' alt="Special discounts" />
                    </SwiperSlide>
                ))}
                 <SwiperSlide className='w-40 h-32 bg-white rounded-xl shadow-lg flex justify-center items-center flex-col p-5 gap-1 cursor-pointer hover:backdrop-opacity-95' >     
                    <p className='text-[#6850D3] text-2xl font-extrabold font-sans'> HP<span className='text-[#343434]'>amin</span> </p>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>

  )
}

export default BrandsMain