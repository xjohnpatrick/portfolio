"use client";
import React from "react";
import { SlArrowUp } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import { SlArrowDown } from "react-icons/sl";
import { TransitionLink } from "@/utils/TransitionLink";

export default function SideNavigation() {
  const scrollUp = () => {
    window.scrollBy({ top: -1000, behavior: "smooth" });
  };

  const scrollDown = () => {
    window.scrollBy({ top: 1000, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col justify-center fixed right-0 top-1/2 -translate-y-1/2 z-50 gap-[1px]">
      <div className="boxNav w-10 h-10">
        <div className="boxNav-inner relative w-full h-full">
          <button
            onClick={scrollUp}
            className="flex w-full h-full absolute bg-black text-white items-center justify-center boxNav-front"
          >
            <SlArrowUp size={16} />
          </button>
          <button
            onClick={scrollUp}
            className="flex w-full h-full absolute bg-white text-black items-center justify-center boxNav-back"
          >
            <SlArrowUp size={16} />
          </button>
        </div>
      </div>
      <TransitionLink href="/all-projects">
        <div className="boxNav3 w-10 h-10">
          <div className="boxNav3-inner w-full h-full relative">
            <button className="flex bg-black w-full h-full absolute text-white items-center justify-center boxNav3-front">
              <TfiClose size={16} />
            </button>
            <button className="flex bg-white w-full h-full absolute text-black items-center justify-center boxNav3-back">
              <RxHamburgerMenu size={16} />
            </button>
          </div>
        </div>
      </TransitionLink>
      <div className="boxNav2 w-10 h-10">
        <div className="boxNav2-inner relative w-full h-full">
          <button
            onClick={scrollDown}
            className="flex w-full h-full absolute bg-black text-white items-center justify-center boxNav2-front"
          >
            <SlArrowDown size={16} />
          </button>
          <button
            onClick={scrollDown}
            className="flex w-full h-full absolute bg-white text-black items-center justify-center boxNav2-back"
          >
            <SlArrowDown size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}