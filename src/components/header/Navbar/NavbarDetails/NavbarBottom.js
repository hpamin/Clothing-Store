import React, { useEffect, useState } from 'react'

function NavbarBottom() {

    const [prevScrollpos, setPrevScrollpos] = useState(window.scrollY);
    const [navbarStyle, setNavbarStyle] = useState({ top: '0' });

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos) {
          setNavbarStyle({ top: '9.5vh' });
        } else {
          setNavbarStyle({ top: '0' });
        }
        setPrevScrollpos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollpos]);  
    
    console.log("prevScrollpos: ",prevScrollpos);
    console.log("navbarStyle: ",navbarStyle);
    
  return (
    <div className={`w-full h-full flex items-center justify-center absolute max-sm:hidden duration-300 -z-10 `} style={prevScrollpos === 0 ? {top: '9.5vh'} : navbarStyle}>
        <ul className='w-[85%] min-h-[8vh] bg-[#6850D3] flex justify-center items-center gap-5 rounded-b-lg shadow-xl'>
            <li className='group px-2 min-h-[8vh] flex items-center cursor-pointer text-white duration-150 relative'> 
                <p> خانه </p>
                <div className='w-full h-1 bg-white absolute bottom-0 right-0 rounded-t-lg invisible group-hover:visible' />  
            </li>
            <li className='group px-2 min-h-[8vh] flex items-center cursor-pointer text-white duration-150 relative'> 
                <p> محصولات </p>
                <div className='w-full h-1 bg-white absolute bottom-0 right-0 rounded-t-lg invisible group-hover:visible' />  
            </li>
            <li className='group px-2 min-h-[8vh] flex items-center cursor-pointer text-white duration-150 relative'> 
                <p> دسته بندی ها </p>
                <div className='w-full h-1 bg-white absolute bottom-0 right-0 rounded-t-lg invisible group-hover:visible' />  
            </li>
            <li className='group px-2 min-h-[8vh] flex items-center cursor-pointer text-white duration-150 relative'> 
                <p> دریاره ما </p>
                <div className='w-full h-1 bg-white absolute bottom-0 right-0 rounded-t-lg invisible group-hover:visible' />  
            </li>
            <li className='group px-2 min-h-[8vh] flex items-center cursor-pointer text-white duration-150 relative'> 
                <p> تماس با ما </p>
                <div className='w-full h-1 bg-white absolute bottom-0 right-0 rounded-t-lg invisible group-hover:visible' />  
            </li>
        </ul>
    </div>
  )
}

export default NavbarBottom