import React, { useEffect, useState } from 'react'
import img1 from '../../../img/info-img.webp'
import { TiMediaPlayReverse } from "react-icons/ti";
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';

function AmazingMain() {

    const[sec, setSec] = useState(1)
    const[min, setMin] = useState(1)
    const[hour, sethour] = useState(1)
    useEffect(() => {
        const intervel = setTimeout(() => {
            if (sec > 0) {
                setSec(sec - 1)
            }else {
                if (min > 0) {
                    setMin(min - 1)
                    setSec(59)
                }else{
                    if (hour > 0) {
                        sethour(hour - 1)
                        setMin(59)
                        setSec(59)
                    }else{
                        if (hour === 0 && min === 0 && sec === 0) {
                            clearInterval(intervel)
                        }
                    }
                }
            }
        }, 1000);
        return () => {
            clearInterval(intervel)
        }
    },[sec])

    const[AmazingMainApi, setAmazingMainApi] = useState(null)
    
    const AmazingApi = async () => {
        const {data} = await axios.get('https://rune-dramatic-basil.glitch.me/AmazingMain')
        setAmazingMainApi(data)
    }
    useEffect(() => {
        AmazingApi()
    } ,[])

  return (
      <section className='w-full min-h-[70vh] flex items-center max-md:min-h-[50vh] max-sm:pt-5'>
        <div className='w-[90%] min-h-[55vh] py-2 flex justify-around flex-col mx-auto relative bg-[#6850D3] rounded-xl shadow-lg max-md:min-h-[50vh] max-sm:w-full max-sm:rounded-none max-sm:gap-10'>
            <div className='w-full flex items-end justify-between gap-3 max-sm:px-1 max-sm:flex-col max-sm:gap-5'>

                <div className='flex justify-center items-end gap-5 max-md:justify-between max-md:px-1 max-sm:w-full'>
                    <p className='text-white text-5xl px-5 py-1 rounded-b-xl self-start max-lg:text-3xl max-md:p-0 max-sm:text-3xl'> شگفت انگیزهای روز </p>
                    <div className='flex justify-end items-center cursor-pointer '>
                        <p className='text-xl text-white max-md:text-lg max-sm:text-base'> مشاهده همه   </p>
                        <TiMediaPlayReverse className='text-xl text-white' /> 
                    </div>
                </div>
                <div className='pl-5 flex gap-3 max-sm:w-full max-sm:items-center max-sm:p-0'>
                    <div className='w-12 h-12 bg-white  m-auto flex justify-center items-center rounded-md shadow-lg max-sm:m-0'>
                        <p className='text-2xl font-bold ' > {sec} </p>
                    </div>
                    <div className='m-auto flex justify-center items-center max-sm:m-0'>
                        <p className='text-xl font-bold text-white' > : </p>
                    </div> 
                    <div className='w-12 h-12 bg-white  m-auto flex justify-center items-center rounded-md shadow-lg max-sm:m-0'>
                        <p className='text-2xl font-bold ' > {min} </p>
                    </div> 
                     <div className='m-auto flex justify-center items-center max-sm:m-0'>
                        <p className='text-xl font-bold text-white' > : </p>
                    </div> 
                    <div className='w-12 h-12 bg-white  m-auto flex justify-center items-center rounded-md shadow-lg max-sm:m-0'>
                        <p className='text-2xl font-bold ' > {hour} </p>
                    </div>   
                </div>

            </div>

            <div className='w-full h-full flex items-center justify-center'>
                
                <img src={img1} className='w-44 h-44 max-sm:w-32 max-sm:h-32' alt="Discount" />

                <Swiper
                slidesPerView='auto'
                spaceBetween={15}
                pagination={{
                clickable: true,
                }}
                className='w-full h-full flex max-md:pb-2'
            >
                {AmazingMainApi?.map((item) => (
                    <SwiperSlide className={`w-52 h-72 bg-[#EEEFEF] rounded-xl shadow-xl flex justify-center items-center flex-col p-5 gap-1 cursor-pointer hover:backdrop-opacity-95 max-lg:w-44 max-lg:justify-evenly max-md:w-40 max-md:h-64 max-md:self-end max-md:p-2 ${!item.discount && 'justify-between'}`} key={item.id} > 

                        <img src={item.img} className='w-40 h-40 mix-blend-multiply object-contain max-md:w-36 max-md:h-36' alt="Special discounts" />
                    
                        <div className='w-full flex flex-col items-center justify-start gap-1'>
                            {item.discount &&
                                <p className='text-gray-400 line-through text-xs text-right self-start'> {item.price.toLocaleString()} تومان </p>
                            }
                            <div className='w-full flex justify-between items-baseline text-sm'>
                                <p className='self-baseline'> {item.discount ? (((100 - parseInt(item.discount)) / 100) * parseInt(item.price)).toLocaleString() : item.price} تومان </p>
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

            

            </div>

        </div>
    </section>
  )
}

export default AmazingMain