import Link from 'next/link';
import React from 'react'
import { SlArrowUp } from "react-icons/sl";
import { RxDoubleArrowUp } from "react-icons/rx";

export default function BackToTop() {
  return (
    <div className='flex w-full h-10 relative'>
      <Link href="#hero">
        <div className="boxNav w-10 h-10 absolute -bottom-10 right-10 hidden lg:flex animate-bounce z-50">
          <div className="boxNav-inner relative w-full h-full">
            <button className="flex w-full h-full absolute bg-black text-white items-center justify-center boxNav-front">
              <SlArrowUp />
            </button>

            <button className="flex w-full h-full absolute bg-white text-black items-center justify-center boxNav-back">
              <RxDoubleArrowUp />
            </button>
          </div>
        </div>
      </Link>
      <Link
        href="#hero"
        className="flex justify-center w-full absolute top-0 lg:hidden"
      >
        <button className="border-white px-4 py-2 border text-xs text-white">
          Back To Top
        </button>
      </Link>
    </div>
  );
}
