"use client";
import React from "react";
import { SlArrowUp } from "react-icons/sl";
import { RxDoubleArrowUp } from "react-icons/rx";

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex w-full h-10 relative">
      {/* Back to Top button for large screens */}
      <div
        className="boxNav w-10 h-10 absolute -bottom-10 right-10 hidden lg:flex animate-bounce z-50"
        onClick={scrollToTop}
      >
        <div className="boxNav-inner relative w-full h-full">
          <button className="flex w-full h-full absolute bg-black text-white items-center justify-center boxNav-front">
            <SlArrowUp />
          </button>

          <button className="flex w-full h-full absolute bg-white text-black items-center justify-center boxNav-back">
            <RxDoubleArrowUp />
          </button>
        </div>
      </div>

      {/* Back to Top button for small screens */}
      <div
        className="flex justify-center w-full absolute top-0 lg:hidden"
        onClick={scrollToTop}
      >
        <button className="border-white px-4 py-2 border text-xs text-white">
          Back To Top
        </button>
      </div>
    </div>
  );
}
