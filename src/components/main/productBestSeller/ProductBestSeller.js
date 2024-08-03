import React, { useEffect, useState } from 'react'
import img1 from '../../../img/info-img.webp'
import { TiMediaPlayReverse } from "react-icons/ti";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import axios from 'axios';


function ProductBestSeller() {

    const[ProductBestSeller, setProductBestSeller] = useState(null)
    
    const productApi = async () => {
        const {data} = await axios.get('https://rune-dramatic-basil.glitch.me/ProductBestSeller')
        setProductBestSeller(data)
    }
    
    useEffect(() => {
        productApi()
    },[])

  return (
    <section className='w-full min-h-[70vh] flex items-center max-md:min-h-[60vh] max-sm:pt-5'>

        <div className='w-[90%] min-h-[60vh] flex justify-around flex-col mx-auto relative max-md:min-h-[50vh] max-md:justify-evenly max-sm:w-full max-sm:gap-5'>
            <div className='w-full flex items-center justify-between gap-3 max-sm:px-1'>
                <p className='text-[#6850D3] text-5xl py-1 bg-white rounded-b-xl self-start max-md:text-4xl max-sm:text-3xl'> پرفروش ترین ها </p>
                <a className='group py-2 px-2 gap-2 bg-[#6850D3] rounded-lg flex justify-center items-center shadow-lg  border-[#6850D3] border-2 hover:bg-white hover:text-[#6850D3] hover:border-[#6850D3] duration-150 text-white self-end cursor-pointer max-md:px-1'>
                    <p className='text-xl text-white group-hover:text-[#6850D3] max-md:text-lg max-sm:text-base'> مشاهده همه   </p>
                    <TiMediaPlayReverse className='text-xl text-white group-hover:text-[#6850D3]' /> 
                </a>
            </div>

            <div className='w-full h-full flex items-center justify-center px-2'>
                
                <Swiper
                slidesPerView='auto'
                spaceBetween={15}
                pagination={{
                clickable: true,
                }}
                className='w-full h-full max-md:pb-2'
            >
                {ProductBestSeller?.map((item) => (
                    <SwiperSlide className={`w-52 h-72 bg-[#EEEFEF] rounded-xl shadow-xl flex justify-center items-center flex-col p-5 gap-1 cursor-pointer hover:backdrop-opacity-95 max-lg:w-44 max-lg:justify-evenly max-md:w-40 max-md:h-64 max-md:self-end max-md:p-2 ${!item.discount && 'justify-between'}`} key={item.id}> 

                        <img src={item.img} className='w-40 h-40 mix-blend-multiply object-contain max-md:w-36 max-md:h-36' alt="Special discounts" />
  
  
                        <div className='w-full flex flex-col items-center justify-start gap-1'>
                            {item.discount &&
                                <p className='text-gray-400 line-through text-xs text-right self-start'> {item.price.toLocaleString()} تومان </p>
                            }
                            <div className='w-full flex justify-between items-baseline'>
                                
                                <p className='self-baseline text-sm'> {item.discount ? (((100 - parseInt(item.discount)) / 100) * parseInt(item.price)).toLocaleString() : item.price.toLocaleString()} تومان </p>
                                {
                                    item.discount &&
                                    <p className='px-2 py-1 text-white bg-red-600 rounded-2xl shadow-xl text-sm'> {item.discount}% </p>
                                }
                            </div>    
                        </div> 
                        
                        <p className='self-baseline max-lg:text-sm'>{item.title}</p>
                    
                    </SwiperSlide>
                ))}
                
                
                </Swiper>

            <div className='w-full h-2/5 bg-[#6850D3] absolute bottom-0 rounded-xl shadow-lg -z-10 py-24 max-sm:rounded-none'/>

            </div>

        </div>
    </section>
  )
}

export default ProductBestSeller