import React, { useEffect, useState } from 'react'
import axios from 'axios'

function BlogMain() {

    const[BlogMainApi, setBlogMainApi] = useState(null)
    const BlogApi = async () => {
        const {data} = await axios.get('https://rune-dramatic-basil.glitch.me/blogs')
        setBlogMainApi(data)
    }
    useEffect(() => {
        BlogApi()
    } ,[])
  return (
    <section className='w-full min-h-[90vh] py-10 flex'>
      <div className='w-[90%] flex flex-col m-auto gap-16 max-md:gap-8'>
            <p className='text-5xl text-center max-md:text-4xl max-sm:text-3xl'> وبلاگ  اچ‌پی امین </p>

            <div className='w-full h-full flex justify-evenly items-center flex-wrap gap-5'>
              {BlogMainApi?.map((item) => (
                <div className='w-72 h-[28rem] bg-[#EEEFEF] rounded-lg shadow-lg p-5 flex justify-center items-center flex-col gap-2' key={item.id}>
                    <img src={item.img} className='w-full h-full object-cover rounded-lg' alt="Blog img" />
                    <p className='text-2xl font-bold self-start'> {item.title} </p>
                    <p className='text-justify text-base text-gray-700'> {item.caption} </p>
                    <button className='py-2 px-2 gap-2 bg-[#6850D3] rounded-lg flex justify-center items-center shadow-lg  border-[#6850D3] border-2 hover:bg-white hover:text-[#6850D3] hover:border-[#6850D3] duration-150 text-white self-end'>
                      بیشتر بخوانید
                    </button>
                </div>
              ))}
            </div>
            
      </div>
    </section>
  )
}

export default BlogMain