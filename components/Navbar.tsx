import { navItems } from '@/data'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex relative w-full h-20 bg-black-100 items-center'>
        <div className='text-beige absolute left-10'>© Code by John Patrick</div>
        <div className='flex text-beige absolute right-10 gap-4'> 
        {navItems.map((item, index) => (
          <a 
            key={index} 
            href={item.link} 
            className='hover:text-white hidden md:flex'
          >
            {item.name}
          </a>
        ))}
        </div>

    </div>
  )
}

export default Navbar

