import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";

function NavbarTop() {
  return (
    <div className='w-full min-h-[8vh] flex justify-center items-center '>
        <div className='w-[90%] h-full py-4 px-2 flex items-center justify-center rounded-b-lg bg-[#EEEFEF] shadow-xl max-sm:justify-between'>
            <div className='w-1/5 flex justify-center items-center gap-2 max-sm:justify-start max-sm:w-fit'>

                    {/*** sm */}
                    <button className='hidden text-5xl max-sm:block'>
                        <IoMenu className='text-4xl' />
                    </button>
                    {/*** More sizes than sm */}
                    <button className='group py-2 px-2 gap-2 bg-[#6850D3] rounded-lg flex justify-center shadow-xl border-[#6850D3] border-2 hover:bg-white hover:text-[#6850D3] hover:border-[#6850D3] duration-150 text-white self-end max-sm:hidden' title='پنل کاربری'>
                        <FaRegUser className='text-2xl text-white group-hover:text-[#6850D3]' />
                    </button>

                    <button className='group py-2 px-2 bg-[#6850D3] rounded-lg flex justify-center shadow-xl border-[#6850D3] border-2 hover:bg-white hover:text-[#6850D3] hover:border-[#6850D3] duration-150 text-white self-end relative max-sm:hidden' title='سبد خرید'>
                        <AiOutlineShoppingCart className='text-2xl text-white group-hover:text-[#6850D3]' />
                    </button>
            </div>

            <div className='w-3/5 max-sm:flex max-sm:justify-center max-sm:items-center'>
                <p className='hidden text-[#6850D3] text-2xl font-extrabold font-sans max-sm:block max-sm:text-3xl'> HP<span className='text-[#343434]'>amin</span> </p>
                <input type="text" className='w-full h-full py-3 rounded-lg shadow-lg pr-5 text-lg outline-none max-sm:hidden' placeholder='هرچی میخوای سرچ کن ...' />
            </div>

            <div className='w-1/5 flex justify-center items-center max-sm:w-fit max-sm:gap-3'>
                <button className='hidden max-sm:block '>
                    <IoSearchOutline className='text-4xl' />
                </button>
                <p className='text-[#6850D3] text-2xl font-extrabold font-sans max-sm:hidden'> HP<span className='text-[#343434]'>amin</span> </p>
            </div>
        </div>
    </div>
  )
}

export default NavbarTop