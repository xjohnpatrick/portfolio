import React from 'react'
import { TypewriterEffect } from './ui/typewriter-effect'
import { words } from '@/data'
import { BodyTabs } from './BodyTabs'

const Hero = () => {
  
  return (
    <div className='flex relative flex-col w-full h-screen' id='about'>
      <span className='absolute top-5 left-5 text-beige'>© Code by John Patrick</span>
      <div className="flex h-full w-full">
        <div className="flex flex-col items-center justify-center px-10 gap-10">
          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-beige/80 uppercase'>
            Welcome to my portfolio
          </p>
          <TypewriterEffect words={words} className='w-[800px]'/>
          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-beige/80'>
            Hi, I&apos;m <span className='text-sage'>John Patrick</span>, a Next.js Developer based in Philippines.
          </p>
        </div>
        <div className="flex w-full h-full px-10">
          <BodyTabs/>
        </div>
      </div>
      
    </div>
  )
}

export default Hero