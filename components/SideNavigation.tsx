"use client";
import React, { useState } from 'react'
import { SlArrowUp } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import { SlArrowDown } from "react-icons/sl";

export default function SideNavigation() {
    const [isHovered, setIsHovered] = useState(false);

    const toggleHover = (hovering: boolean) => setIsHovered(hovering);

  return (
    <div className="flex flex-col justify-center fixed right-0 top-1/2 -translate-y-1/2 z-50 gap-[1px]">
      <button className="flex w-10 h-10 bg-black text-white items-center justify-center hover:bg-white hover:text-black">
        <SlArrowUp size={16} />
      </button>
      <button
        className="flex w-10 h-10 bg-black text-white items-center justify-center hover:bg-white hover:text-black"
        onMouseEnter={() => toggleHover(true)}
        onMouseLeave={() => toggleHover(false)}
      >
        {isHovered ? <TfiClose size={16} /> : <RxHamburgerMenu size={16} />}
      </button>
      <button className="flex w-10 h-10 bg-black text-white items-center justify-center hover:bg-white hover:text-black">
        <SlArrowDown size={16} />
      </button>
    </div>
  );
}
