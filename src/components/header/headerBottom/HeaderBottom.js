import React from 'react'
import img1 from '../../../img/header2.png'
import { FaPlus } from "react-icons/fa";

function HeaderBottom() {
  return (
    <section className='w-full min-h-[85vh] flex items-center justify-center'>
        <div className='w-[90%] h-full flex items-center justify-center max-md:flex-col max-md:py-5 '>
            <div className='w-1/2 h-full flex justify-center items-center flex-col gap-5 max-md:w-full max-md:h-fit max-sm:gap-3'>

                <h2 className='text-4xl text-[#6850D3] leading-normal max-xl:text-3xl max-lg:leading-relaxed max-md:text-center max-sm:text-2xl'> با اچ‌پی امین  <span className='bg-[#6850D3] rounded-xl px-2 text-white'>  جنس خوب </span>و <span className=''> قیمت مناسب </span> را یکجا تجربه کنید. </h2>

                <p className='text-[#F7B900] self-start text-lg max-md:text-sm'> انواع محصولات متنوع و مد روز </p>
                <p className='text-justify text-[#343434] max-md:text-sm'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد </p>
                <button className='py-2 px-2 gap-2 bg-[#6850D3] rounded-lg flex justify-center items-center shadow-lg  border-[#6850D3] border-2 hover:bg-white hover:text-[#6850D3] hover:border-[#6850D3] duration-150 text-white self-end max-md:text-sm'>
                    محصولات بیشتر
                    <FaPlus />
                </button>
            </div>
            
            <div className='w-1/2 h-full relative flex justify-center items-center max-md:w-full'>
                <svg viewBox="0 0 200 200" className='w-2/3 h-full absolute -z-0 max-lg:w-96 max-md:w-80' xmlns="http://www.w3.org/2000/svg">
                    <path fill="#6850D3" d="M43.9,-77.3C57.3,-68.4,68.8,-57.3,76.2,-44.1C83.5,-30.9,86.9,-15.4,86.8,-0.1C86.6,15.3,83.1,30.6,76.2,44.8C69.4,59,59.2,72,46,79.7C32.7,87.4,16.4,89.7,0,89.7C-16.4,89.8,-32.8,87.5,-47,80.4C-61.3,73.3,-73.3,61.3,-81.7,47C-90.2,32.8,-95,16.4,-93.6,0.8C-92.2,-14.8,-84.5,-29.5,-75.5,-42.9C-66.6,-56.3,-56.4,-68.2,-43.6,-77.4C-30.8,-86.6,-15.4,-93.1,-0.1,-93C15.3,-92.9,30.6,-86.1,43.9,-77.3Z" transform="translate(100 100)" />
                </svg>
                <img src={img1} className='w-2/3 h-2/3 z-10 max-lg:w-96 max-md:w-80' alt="header title" style={{filter:"drop-shadow(10px 20px 30px rgba(0,0,0,0.5))"}} />
            </div>
        </div>
    </section>
  )
}

export default HeaderBottom