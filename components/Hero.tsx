import React from 'react'
import { TypewriterEffect } from './ui/typewriter-effect'
import { words } from '@/data'
import Navbar from './Navbar'
import Link from 'next/link'

const Hero = () => {
  
  return (
    <div className='flex flex-col w-full h-screen' id='about'>
      <Navbar/>
      <div className="flex flex-col h-full items-center justify-center mx-10 gap-10">
        <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-beige uppercase'>
          Welcome to my portfolio
        </p>
        <TypewriterEffect words={words} className='w-[1000px]'/>
        <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-beige'>
          Hi, I&apos;m John Patrick, a Next.js Developer based in Philippines.
        </p>
        <button className="px-4 py-2 rounded-md border border-beige text-beige text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
          <Link href="#projects">More about me</Link>
        </button>
      </div>
    </div>
  )
}

export default Hero