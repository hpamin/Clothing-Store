import React from 'react'
import Navbar from './Navbar/Navbar'
import HeaderBottom from './headerBottom/HeaderBottom'

function Header() {
  return (
    <header className='w-full min-h-[90vh]'>
        <HeaderBottom />
    </header>
  )
}

export default Header