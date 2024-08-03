import React from 'react'
import { FaPlus } from "react-icons/fa";
import { CgMoreO } from "react-icons/cg";

function CategoryMain() {
    let api = [
        {   
            id:0 ,
            img: 'https://padmira.ir/upload/slider/orginal_1704370740.png'
        },
        {   
            id:1 ,
            img: 'https://padmira.ir/upload/slider/orginal_1704368694.png'
        },
        {   
            id:2 ,
            img: 'https://padmira.ir/upload/slider/orginal_1704368675.png'
        },
    ]
  return (
    <section className='w-full min-h-[55vh] flex justify-evenly items-center flex-col pb-5 max-md:py-5'>
        <p className='text-4xl text-[#343434] py-3 max-md:text-3xl max-sm:text-2xl'> دسته بندی ها </p>

        <div className="w-[90%] h-full flex mx-auto items-center justify-evenly flex-wrap gap-5 "> 

            {api.map((item) => (
                <div className='w-80 h-[80%]' key={item.id}> 
                    <img src={item.img} className='w-full object-cover rounded-xl shadow-lg' alt="Category child" />
                </div>
            ))}

        </div>
    </section>
  )
}

export default CategoryMain