import React from 'react'

import NavbarTop from './NavbarDetails/NavbarTop';
import NavbarBottom from './NavbarDetails/NavbarBottom';

function Navbar() {
  return (
    <nav className='w-full h-full flex flex-col sticky top-0 z-50 max-sm:top-[-1px]'>
        <NavbarTop />
        <NavbarBottom />
    </nav>
  )
}

export default Navbar